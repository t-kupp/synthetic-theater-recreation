import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export default function Mouse() {
  const cursorRef = useRef(null);
  const [showDrag, setShowDrag] = useState(false);

  useGSAP(() => {
    const xMoveCursor = gsap.quickTo(cursorRef.current, "left", { duration: 0.3, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "top", { duration: 0.3, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      let offsetX = 8;
      let offsetY = 16;

      const scrollerHovered =
        e.target instanceof Element && e.target.classList.contains("scroller-image");

      if (scrollerHovered && !showDrag) {
        setShowDrag(true);
        offsetX = 8;
        offsetY = -12;
      } else {
        setShowDrag(false);
      }

      xMoveCursor(e.pageX - offsetX);
      yMoveCursor(e.pageY - offsetY);
    });
  });

  console.log("showDrag:", showDrag);

  return (
    <div
      ref={cursorRef}
      className={`${showDrag ? "h-7 w-22 px-3 py-1" : "w-2"} bg-light pointer-events-none fixed flex h-2 w-2 items-center justify-center rounded-full uppercase transition-[width,height]`}
    >
      {showDrag && (
        <span className="text-background flex items-center justify-center gap-1.5 leading-none">
          <ArrowLeft size={16} />
          <span className="pt-0.5">drag</span>
          <ArrowRight size={16} />
        </span>
      )}
    </div>
  );
}
