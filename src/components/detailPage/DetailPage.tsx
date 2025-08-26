import { useStore } from "@/store";
import { Story } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import Footer from "./Footer";
import HorizontalScroller from "./HorizontalScroller";
import InfoBar from "./InfoBar";

interface DetailPageProps {
  story: Story;
  previousStory: Story | null;
}

export default function DetailPage({ story, previousStory }: DetailPageProps) {
  const detailPageRef = useRef(null);
  const { loadingComplete } = useStore();

  useGSAP(
    () => {
      // Enter animations

      const tl = gsap.timeline({ delay: 0.25, paused: !loadingComplete });

      useStore.subscribe((state) => {
        if (state.loadingComplete) {
          tl.play();
        }
      });

      // Index number
      tl.from(".index-number", { opacity: 0 }, 0);

      // Horizontal scroller
      tl.from(".horizontal-scroller", { x: 50, opacity: 0 }, 0);

      // Title
      const titleSplit = SplitText.create(".title", { type: "chars", mask: "chars" });
      tl.from(
        titleSplit.chars,
        {
          xPercent: 100,
          stagger: 0.04,
          duration: 1.5,
          ease: "expo.out",
        },
        0
      );

      // Info bar (desktop and mobile separately but at same time)
      const desktopInfoItems = gsap.utils.toArray(".lg\\:block .info-item");
      const mobileInfoItems = gsap.utils.toArray(".lg\\:hidden .info-item");

      [...desktopInfoItems, ...mobileInfoItems].forEach((item, i) => {
        const actualIndex = i < desktopInfoItems.length ? i : i - desktopInfoItems.length;
        const split = SplitText.create(item as Element, {
          type: "lines",
          mask: "lines",
        });
        tl.from(
          split.lines,
          {
            yPercent: 100,
            stagger: 0.075,
          },
          0.1 + actualIndex / 15
        );
      });

      // Footer
      const footerItems = gsap.utils.toArray(".footer-item");
      footerItems.forEach((item, i) => {
        const split = SplitText.create(item as Element, {
          type: "lines",
          mask: "lines",
        });
        tl.from(
          split.lines,
          {
            yPercent: 100,
            stagger: 0.075,
          },
          0.1 + i / 15
        );
      });
    },
    { scope: detailPageRef }
  );

  return (
    <section ref={detailPageRef} className="pt-header-height flex h-full flex-col overflow-hidden">
      {/* Name and info  */}
      <div className="flex items-end px-5">
        <div className="flex-1">
          <h1 className="title font-bit truncate text-[16vw] !leading-[60%] tracking-tight uppercase lg:translate-y-1.5 lg:text-[min(12vw,13rem)]">
            {story.displayName}
          </h1>
        </div>

        {/* Info bar desktop  */}
        <div className="hidden w-full lg:block">
          <InfoBar story={story} />
        </div>

        {/* Number  */}
        <p className="index-number font-bit text-dark text-[8vw] !leading-[65%] lg:ml-20 lg:text-[min(4.5vw,10rem)]">
          (0{story.id})
        </p>
      </div>

      {/* Info bar mobile  */}
      <div className="block lg:hidden">
        <InfoBar story={story} />
      </div>

      {/* Horizontal scroller  */}
      <HorizontalScroller story={story} previousStory={previousStory} />

      <Footer />
    </section>
  );
}
