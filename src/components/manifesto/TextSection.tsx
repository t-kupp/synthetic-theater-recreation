import { ReactNode } from "react";

interface TextSectionProps {
  children: ReactNode;
  index: number;
  reversed?: boolean;
}

export default function TextSection({ children, reversed, index }: TextSectionProps) {
  return (
    <div
      className={(reversed ? "flex-row-reverse" : "flex-row") + " text-dark flex justify-between"}
    >
      <p className="w-[37ch] text-[16px] md:w-1/2 md:max-w-[42ch] md:text-[22px]">{children}</p>
      <p className="text-[11px]">{index.toString().padStart(3, "0")}</p>
    </div>
  );
}
