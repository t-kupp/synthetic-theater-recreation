import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

interface TextSectionProps {
  children: ReactNode;
  index: number;
  textLeft?: boolean;
}

export default function TextSection({ children, textLeft, index }: TextSectionProps) {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      scrollTrigger: { trigger: textRef.current, start: "bottom 98%" },
    });
  });

  return (
    <div
      ref={textRef}
      className={
        (textLeft ? "sm:flex-row-reverse" : "text-right sm:flex-row sm:text-left") +
        " text-dark mt-32 flex flex-col justify-between gap-5 sm:text-left"
      }
    >
      <p className="text-[11px]">{index.toString().padStart(3, "0")}</p>
      <p className="w-[37ch] text-[16px] md:w-1/2 md:max-w-[42ch] md:text-[22px]">{children}</p>
    </div>
  );
}
