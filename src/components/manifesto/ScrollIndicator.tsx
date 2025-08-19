import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface ScrollIndicatorProps {
  showScrollText: boolean;
  showScrollIndicator: boolean;
}

export default function ScrollIndicator({
  showScrollIndicator,
  showScrollText,
}: ScrollIndicatorProps) {
  const lineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    // slide right
    tl.to(lineRef.current, { yPercent: 100, duration: 0.8, ease: "power4.out" }, ">+2");
    // set left "offscreen"
    tl.set(lineRef.current, { yPercent: -100 });
    // slide in from left
    tl.to(lineRef.current, { yPercent: 0, duration: 0.8, ease: "power4.in" });
  });

  return (
    <div className="fixed bottom-5 left-1/2 z-[10] -translate-x-1/2 uppercase">
      <div
        className={
          (showScrollText ? "mb-0" : "-mb-8") +
          " relative h-8 overflow-hidden transition-[margin] duration-400 ease-out"
        }
      >
        <div
          ref={lineRef}
          className={
            (showScrollIndicator ? "opacity-100" : "opacity-0") +
            " bg-dark absolute left-1/2 h-full w-[1px] transition-opacity"
          }
        ></div>
      </div>
      <div className="mt-3 h-fit overflow-hidden">
        <p
          className={
            (showScrollText ? "translate-y-0" : "-translate-y-full") +
            " transition-transform ease-out"
          }
        >
          Keep scrolling
        </p>
      </div>
    </div>
  );
}
