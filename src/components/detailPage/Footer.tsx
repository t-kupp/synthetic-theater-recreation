import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-5 px-5 pb-5 text-[11px] uppercase sm:flex-row sm:gap-20">
      <div>
        <p>AI Content</p>
        <p className="text-dark">ChatGPT & Midjourney (Art) Claude (Stories)</p>
      </div>
      <div>
        <p>Design</p>
        <a href="https://www.synthetictheatre.com/" target="_blank" className="">
          <div className="group relative overflow-hidden">
            <p className="text-dark flex items-end gap-2 transition-transform ease-in-out group-hover:-translate-y-full">
              Daniele Buffa - synthetictheater.com
              <ArrowUpRight className="-translate-y-[1px]" size={16} />
            </p>
            <p className="text-dark absolute top-full flex items-end gap-2 transition-transform ease-in-out group-hover:-translate-y-full">
              Daniele Buffa - synthetictheater.com
              <ArrowUpRight className="-translate-y-[1px]" size={16} />
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
