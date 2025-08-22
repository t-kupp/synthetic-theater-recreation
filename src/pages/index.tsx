import storiesData from "@/../public/stories/storiesData.json";
import BottomLink from "@/components/landingPage/BottomLink";
import Footer from "@/components/landingPage/Footer";
import HorizontalScroller from "@/components/landingPage/HorizontalScroller";
import Summary from "@/components/landingPage/Summary";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
const { stories } = storiesData;
const newestStory = stories[stories.length - 1];

export default function Home() {
  const homeRef = useRef(null);

  useGSAP(
    () => {
      // Enter animations
      const tl = gsap.timeline({ delay: 0.25 });

      // Info bar
      tl.from(".info-item", { yPercent: 100, stagger: 0.2 }, 0);

      // Horizontal scroller
      tl.from(".scroller-container", { yPercent: 10, opacity: 0 }, 0);

      // Genre text
      const genreSplit = SplitText.create(".genre-text", { type: "lines", mask: "lines" });
      tl.from(genreSplit.lines, { yPercent: 100 }, 0.25);

      // Summary texts
      const summaries = gsap.utils.toArray(".summary-text");
      summaries.forEach((split, i) => {
        SplitText.create(split, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => {
            tl.from(
              self.lines,
              {
                yPercent: 100,
                stagger: 0.075,
              },
              0.1 + i / 15
            );
          },
        });
      });

      // Arrow, discover button and index number
      tl.from(
        [".arrow", ".discover-button", ".index-number"],
        {
          opacity: 0,
        },
        0.25
      );

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

      // Footer
      tl.from(".footer-marquee", { opacity: 0 }, 0);
    },
    { scope: homeRef }
  );

  return (
    <div ref={homeRef} className="pt-header-height flex h-full flex-col">
      <HorizontalScroller story={newestStory} />
      <Summary story={newestStory} />
      <BottomLink story={newestStory} />
      <Footer />
    </div>
  );
}
