import { ReactNode } from "react";

interface TextSectionProps {
  children: ReactNode;
  index: number;
  textLeft?: boolean;
}

export default function TextSection({ children, textLeft, index }: TextSectionProps) {
  return (
    <div
      className={
        (textLeft ? "sm:flex-row-reverse" : "sm:flex-row") +
        " text-dark flex flex-col justify-between gap-5 sm:flex-row"
      }
    >
      <p className="text-[11px]">{index.toString().padStart(3, "0")}</p>
      <p className="w-[37ch] text-[16px] md:w-1/2 md:max-w-[42ch] md:text-[22px]">{children}</p>
    </div>
  );
}
