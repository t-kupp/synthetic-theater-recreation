import { useStore } from "@/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export default function Mouse() {
  const cursorRef = useRef(null);
  const [showDragText, setShowDragText] = useState(true);
  const { showDragCursor } = useStore();

  useGSAP(() => {
    const xMoveCursor = gsap.quickTo(cursorRef.current, "left", { duration: 0.3, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "top", { duration: 0.3, ease: "power3" });

    function handleMouseMove(e: MouseEvent) {
      const offsetX = 8;
      const offsetY = -12;

      xMoveCursor(e.pageX - offsetX);
      yMoveCursor(e.pageY - offsetY);
    }

    function handleMouseDown() {
      const currentShowDragMouseCursor = useStore.getState().showDragCursor;
      if (currentShowDragMouseCursor) setShowDragText(false);
    }

    function handleMouseUp() {
      setShowDragText(true);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [showDragCursor]);

  console.log("showDragCursor:", showDragCursor);

  return (
    <div
      ref={cursorRef}
      className={`${showDragCursor ? (!showDragText ? "h-8 w-[46px] translate-x-5 opacity-100" : "h-8 w-22 translate-x-0 opacity-100") : "h-2 w-2 opacity-0"} bg-light pointer-events-none fixed hidden items-center justify-center rounded-full uppercase transition-[width,height,opacity,translate] duration-300 ease-in-out lg:flex`}
    >
      {showDragCursor && (
        <span className="text-background flex items-center justify-center leading-none">
          <ArrowLeft size={16} />
          <span
            className={`${!showDragText ? "w-0 px-0.5" : "w-11 px-1.5"} pt-0.5 transition-[padding,width,translate] duration-300 ease-in-out`}
          ></span>
          <span
            className={`${!showDragText ? "opacity-0" : "opacity-100"} absolute pt-0.5 transition-opacity duration-300 ease-in-out`}
          >
            drag
          </span>
          <ArrowRight size={16} />
        </span>
      )}
    </div>
  );
}
