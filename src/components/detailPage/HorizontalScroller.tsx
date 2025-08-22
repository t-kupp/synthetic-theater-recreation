import { useStore } from "@/store";
import { GalleryItem, Story } from "@/types";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BottomLink from "../landingPage/BottomLink";
import SwipeIndicator from "./SwipeIndicator";

interface HorizontalScrollerProps {
  story: Story;
  previousStory: Story | null;
}

export default function HorizontalScroller({ story, previousStory }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { setShowDragCursor } = useStore();

  useEffect(() => {
    const images = story.images;
    const segments = story.fullSegments;
    const newGalleryItems: GalleryItem[] = [];

    for (let i = 0; i < images.length + segments.length; i++) {
      if (images[i])
        newGalleryItems.push({ type: "image", src: images[i].src, alt: images[i].alt });
      if (segments[i]) newGalleryItems.push({ id: i, type: "segment", text: segments[i] });
    }

    setGalleryItems(newGalleryItems);
  }, [story]);

  useGSAP(() => {
    if (!containerRef.current || !galleryRef.current) return;

    Draggable.create(galleryRef.current, {
      type: "x",
      inertia: true,
      // Calculating bounds minX dependent on gallery width and container width
      bounds: {
        minX: -galleryRef.current.clientWidth + containerRef.current.clientWidth - 24,
        maxX: 0,
      },
      // this.x is the x position of the galleryRef element -24 means the gallery has been
      // moved 24 pixels, which triggers showScrollIndicator state update
      onThrowUpdate: function () {
        setShowScrollIndicator(this.x > -24);
      },
      onDrag: function () {
        console.log("this.x:", this.x);
        setShowScrollIndicator(this.x > -24);
      },
    });
  }, [galleryItems]);

  return (
    <>
      <div ref={containerRef} className="mt-10 mb-4 h-full overflow-x-hidden overflow-y-hidden">
        <div ref={galleryRef} className="mx-5 flex h-full w-fit">
          {galleryItems.map((item, i) => (
            <div
              onMouseEnter={() => setShowDragCursor(true)}
              onMouseLeave={() => setShowDragCursor(false)}
              key={i}
              className={`${item.type === "image" ? "aspect-square" : "bg-dark/15 aspect-[3/4]"} h-full px-1`}
            >
              {item.type === "image" && (
                <Image
                  className="h-full w-full object-cover"
                  height={1024}
                  width={1024}
                  src={`/stories/${story.title}/${item.src}`}
                  alt={item.alt}
                />
              )}
              {item.type === "segment" && (
                <div className="flex h-full flex-col justify-between p-4 text-[min(24px,1.5vh)]">
                  <p className="text-dark">{`// ${item.id + 1}`}</p>
                  <p className="max-w-[34ch]">{item.text}</p>
                </div>
              )}
            </div>
          ))}
          {previousStory && (
            <div className="group aspect-square h-full w-full px-1">
              <div className="flex h-full w-full flex-col justify-end text-[min(24px,1.5vh)]">
                <BottomLink className="!my-0 !h-full !w-full !px-0" story={previousStory} isEndCard>
                  <div className="h-full">
                    <Image
                      className="h-full w-full object-cover transition-[filter] duration-300 group-hover:brightness-100 lg:brightness-50"
                      src={`/stories/${previousStory.title}/${previousStory.images[0].src}`}
                      alt={`/stories/${previousStory.title}/${previousStory.images[0].alt}`}
                      height={1024}
                      width={1024}
                    ></Image>
                    <p className="text-light text-[11px] uppercase lg:my-5 lg:ml-5">
                      Previous screening
                    </p>
                  </div>
                </BottomLink>
              </div>
            </div>
          )}
        </div>
      </div>
      <SwipeIndicator showScrollIndicator={showScrollIndicator} />
    </>
  );
}
