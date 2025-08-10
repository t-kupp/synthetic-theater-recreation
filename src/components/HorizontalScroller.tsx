"use client";

import { useStore } from "@/store";
import { Story } from "@/types";
import { horizontalLoop } from "@/utils/infiniteScroller";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HorizontalScrollerProps {
  data: Story;
}

export default function HorizontalScroller({ data }: HorizontalScrollerProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const { setShowDragCursor } = useStore();

  useEffect(() => {
    function handleResize() {
      const width = boxRef.current?.clientWidth;
      if (width) setCardWidth(width);
    }
    handleResize();
    window.addEventListener("resize", () => handleResize());

    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  }, []);

  useGSAP(() => {
    const boxes: HTMLDivElement[] = gsap.utils.toArray(".box");

    const loop = horizontalLoop(boxes, {
      paused: true,
      draggable: true,
      center: true,
    });

    loop.toIndex(0, { duration: 0, ease: "power1.inOut" });

    boxes.forEach((box, i) =>
      box.addEventListener("click", () => loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" }))
    );
  });

  return (
    <div className="flex h-[45vh] flex-col overflow-x-hidden">
      {/* title, id, title  */}
      <div className="mb-2 flex justify-between px-5 text-[11px] uppercase">
        <span>{data.title}</span>
        <span>(0{data.id})</span>
        <span>{data.title}</span>
      </div>

      {/* Horizontal scroller */}
      <div
        className="relative flex h-full w-full"
        onMouseEnter={() => setShowDragCursor(true)}
        onMouseLeave={() => setShowDragCursor(false)}
      >
        {[...data.images, ...data.images, ...data.images].map((img, i) => (
          <div key={i} ref={boxRef} className="box aspect-square h-full">
            <Image
              width={1024}
              height={1024}
              src={`/stories/${data.title}/${img.src}`}
              alt={img.alt}
              className="scroller-image h-full w-full object-cover px-0.5"
            />
          </div>
        ))}
      </div>
      {/* Genre  */}

      <p
        style={{ transform: `translateX(calc(${cardWidth / 2}px - 100%))` }}
        className="text-dark relative left-1/2 w-fit pt-2 pr-0.5 text-[11px] uppercase"
      >
        Genre: {data.genre}
      </p>
    </div>
  );
}
