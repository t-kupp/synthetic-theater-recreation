import { horizontalLoop } from "@/utils/infiniteScroller";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GiPolarStar } from "react-icons/gi";

export default function Footer() {
  useGSAP(() => {
    const texts = gsap.utils.toArray(".bottom-text");
    const loop = horizontalLoop(texts, { speed: 0.3, repeat: -1 });
  });

  return (
    <div className="footer-marquee z-10 flex gap-2 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <span
          key={i}
          className="bottom-text flex items-center gap-2 leading-none text-nowrap uppercase"
        >
          Now screening
          <GiPolarStar
            className="text-dark mb-0.5 animate-[spin_10s_linear_infinite]"
            size={14}
            fill="var(--theme-dark)"
          />
        </span>
      ))}
    </div>
  );
}
