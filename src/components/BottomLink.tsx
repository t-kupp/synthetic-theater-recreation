import { Story } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BottomLinkProps {
  data: Story;
}

export default function BottomLink({ data }: BottomLinkProps) {
  return (
    <div className="flex px-5">
      <Link href={"/stories/nexus"} className="relative flex flex-col">
        <h1 className="font-bit text-[min(16.4rem,16vh)] leading-[60%] uppercase">
          {data.displayName}
        </h1>

        <div className="text-dark relative block h-20">
          <ArrowRight size={100} className="absolute bottom-0 left-0" />
          <ArrowRight size={100} className="absolute bottom-0 left-0 translate-x-1/4" />
          <ArrowRight size={100} className="absolute bottom-0 left-0 translate-x-2/4" />
        </div>
      </Link>
      <div className="font-bit text-dark absolute right-5 bottom-5 text-[3.2rem] leading-[0.6]">{`(0${data.id})`}</div>
    </div>
  );
}
