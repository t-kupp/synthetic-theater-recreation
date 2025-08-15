"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface SwipeIndicatorProps {
  showScrollIndicator: boolean;
}

export default function SwipeIndicator({ showScrollIndicator }: SwipeIndicatorProps) {
  const lineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    // slide right
    tl.to(lineRef.current, { xPercent: 100, duration: 0.8, ease: "power4.out" }, ">+2");
    // set left "offscreen"
    tl.set(lineRef.current, { xPercent: -100 });
    // slide in from left
    tl.to(lineRef.current, { xPercent: 0, duration: 0.8, ease: "power4.in" });
  });

  return (
    <div className="mb-6 flex w-full flex-col items-center gap-2 md:hidden">
      <div className="w-10 overflow-hidden">
        <div ref={lineRef} className="bg-dark h-[1px] w-full"></div>
      </div>
      <div className="overflow-hidden">
        <p
          className={
            (showScrollIndicator ? "-translate-y-0" : "-translate-y-full") +
            " text-[11px] uppercase transition-transform"
          }
        >
          Keep swiping
        </p>
      </div>
    </div>
  );
}
