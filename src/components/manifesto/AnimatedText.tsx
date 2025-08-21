import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  direction: "left" | "right";
  leftPercent: number;
}

export default function AnimatedText({ text, direction, leftPercent }: AnimatedTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const duration = 50 + Math.random() * 100;
    console.log("duration:", duration);

    if (direction === "right") {
      gsap.to(textRef.current, { xPercent: 100, duration: duration, ease: "none", repeat: -1 });
    }

    if (direction === "left") {
      gsap.to(textRef.current, { xPercent: -100, duration: duration, ease: "none", repeat: -1 });
    }
  });

  return (
    <div
      ref={textRef}
      style={{ left: `${leftPercent}%` }}
      className={"font-bit relative w-full text-[4rem] md:text-[11vh]"}
    >
      <p className="w-full !leading-[60%] uppercase">{text}</p>
      <p
        className={
          (direction === "right" ? "right-[100%]" : "left-[100%]") +
          " absolute top-0 w-full !leading-[60%] uppercase"
        }
      >
        {text}
      </p>
    </div>
  );
}
