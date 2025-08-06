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
      const scrollerHovered =
        e.target instanceof Element && e.target.classList.contains("scroller-image");

      setShowDrag(scrollerHovered);

      const offsetX = 8;
      const offsetY = scrollerHovered ? -12 : 16;

      xMoveCursor(e.pageX - offsetX);
      yMoveCursor(e.pageY - offsetY);
    });
  });

  return (
    <div
      ref={cursorRef}
      className={`${showDrag ? "h-8 w-22" : "h-2 w-2"} bg-light pointer-events-none fixed hidden items-center justify-center rounded-full uppercase transition-[width,height] lg:flex`}
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
