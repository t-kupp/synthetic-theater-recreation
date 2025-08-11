import { GalleryItem, Story } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HorizontalScrollerProps {
  story: Story;
}

export default function HorizontalScroller({ story }: HorizontalScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const images = story.images;
    const segments = story.fullSegments;
    const newGalleryItems: GalleryItem[] = [];

    for (let i = 0; i < images.length + segments.length; i++) {
      if (images[i])
        newGalleryItems.push({ type: "image", src: images[i].src, alt: images[i].alt });
      if (segments[i]) newGalleryItems.push({ id: i, type: "segment", text: segments[i] });
    }

    console.log("newGalleryItems:", newGalleryItems);
    setGalleryItems(newGalleryItems);
  }, [story]);

  useGSAP(() => {
    if (!containerRef.current || !galleryRef.current) return;

    gsap.registerPlugin(Draggable);
    gsap.registerPlugin(InertiaPlugin);
    Draggable.create(galleryRef.current, {
      type: "x",
      inertia: true,
      // Calculating bounds minX dependent on gallery width and container width
      bounds: {
        minX: -galleryRef.current.clientWidth + containerRef.current.clientWidth,
        maxX: 0,
      },
    });
  }, [galleryItems]);

  return (
    <div ref={containerRef} className="h-full overflow-x-hidden overflow-y-hidden">
      <div ref={galleryRef} className="mt-10 flex h-full w-fit">
        {galleryItems.map((item, i) => (
          <div
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
              <div className="flex h-full flex-col justify-between p-4 text-[min(24px,2vh)]">
                <p className="text-dark">{`// ${item.id + 1}`}</p>
                <p className="max-w-[34ch]">{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
