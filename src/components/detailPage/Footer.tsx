import { useStore } from "@/store";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { setShowCustomCursor } = useStore();

  return (
    <div className="mt-5 flex flex-col gap-5 px-5 pb-5 text-[11px] uppercase sm:flex-row sm:gap-20">
      <div>
        <p className="footer-item">AI Content</p>
        <p className="text-dark footer-item">ChatGPT (Art) - Claude (Stories)</p>
      </div>
      <div>
        <p className="footer-item">Design</p>
        <a
          href="https://www.synthetictheatre.com/"
          target="_blank"
          onMouseEnter={() => setShowCustomCursor(false)}
          onMouseLeave={() => setShowCustomCursor(true)}
        >
          <div className="group relative overflow-hidden">
            <p className="text-dark footer-item flex items-end transition-transform ease-in-out group-hover:-translate-y-full">
              Daniele Buffa - synthetictheater.com
              <ArrowUpRight className="ml-2 inline-block -translate-y-[1px]" size={16} />
            </p>
            <p className="text-dark absolute top-full flex items-end transition-transform ease-in-out group-hover:-translate-y-full">
              Daniele Buffa - synthetictheater.com
              <ArrowUpRight className="ml-2 inline-block -translate-y-[1px]" size={16} />
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
