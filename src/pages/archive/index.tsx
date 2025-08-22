import storiesData from "@/../public/stories/storiesData.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  const archiveRef = useRef(null);
  const { stories } = storiesData;
  const [imageScale, setImageScale] = useState(0);
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  const spans = {
    desktop: {
      index: [3, 6, 1],
      title: [13, 10, 7],
      genre: [12, 13, 9],
      date: [1, 7, 3],
      image: [8, 2, 13],
    },
    mobile: {
      index: [1, 2, 1],
      title: [3, 3, 2],
      genre: [3, 3, 3],
      date: [1, 2, 1],
      image: [2, 1, 3],
    },
  };

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      // Looks arbitrary, but this value works for ... grid, image and viewport width reasons
      setImageScale(55000 / width / 100);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useGSAP(
    () => {
      // Enter animations
      const tl = gsap.timeline();

      // Title
      const titleSplit = SplitText.create(".title", { type: "chars", mask: "chars" });
      tl.from(titleSplit.chars, {
        xPercent: 100,
        stagger: 0.04,
        duration: 1.5,
        ease: "expo.out",
      });
    },
    { scope: archiveRef }
  );

  return (
    <section ref={archiveRef} className="pt-header-height flex h-full flex-col px-5">
      {/* Header  */}
      <header className="font-bit mb-16 flex items-end justify-between uppercase">
        <h1 className="title font-bit text-[16vw] !leading-[60%] tracking-tight uppercase lg:translate-y-1.5 lg:text-[min(9vw,10rem)]">
          Archive
        </h1>
        <p className="font-bit text-dark text-[8vw] !leading-[65%] lg:text-[min(4.5vw,10rem)]">
          (0{stories.length})
        </p>
      </header>

      {/* List  */}
      {stories.map((story, index) => {
        const i = index % spans.desktop.index.length;
        const isHovered = hoveredStory === story.id;

        return (
          <Link
            href={`/story/${story.title}`}
            key={story.id}
            style={{ translate: `0px -${i * 2}px` }}
            onMouseEnter={() => setHoveredStory(story.id)}
            onMouseLeave={() => setHoveredStory(null)}
            className="border-dark hover:border-light group border-y-2 py-5 transition-colors hover:z-[1] sm:py-8"
          >
            <div
              style={
                {
                  translate: `0px -${i * 2}px`,
                  "--desktop-index": spans.desktop.index[i],
                  "--mobile-index": spans.mobile.index[i],
                  "--desktop-title": spans.desktop.title[i],
                  "--mobile-title": spans.mobile.title[i],
                  "--desktop-genre": spans.desktop.genre[i],
                  "--mobile-genre": spans.mobile.genre[i],
                  "--desktop-date": spans.desktop.date[i],
                  "--mobile-date": spans.mobile.date[i],
                  "--desktop-image": spans.desktop.image[i],
                  "--mobile-image": spans.mobile.image[i],
                } as React.CSSProperties
              }
              className="grid h-[calc(100vw/3-25px)] grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,1fr)] gap-3 sm:h-32 sm:grid-cols-[repeat(16,1fr)]"
            >
              {/* Index  */}
              <div className="relative col-span-1 [grid-column-start:var(--mobile-index)] h-fit w-full overflow-hidden sm:col-span-3 sm:[grid-column-start:var(--desktop-index)]">
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  0{story.id}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  Title: {story.displayName}
                </p>
              </div>
              {/* Image  */}
              <div
                className="col-span-1 [grid-column-start:var(--mobile-image)] flex items-center justify-center sm:col-span-4 sm:[grid-column-start:var(--desktop-image)]"
                style={{ gridRow: "1 / 3" }}
              >
                <div className="relative aspect-auto h-full w-full overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2">
                    <Image
                      style={{
                        transform: `scale(${isHovered ? 1 : imageScale})`,
                        transition: "transform 400ms ease-out",
                      }}
                      className="h-full w-full object-cover"
                      height={1024}
                      width={1024}
                      src={`/stories/${story.title}/${story.images[0].src}`}
                      alt={`/stories/${story.title}/${story.images[0].alt}`}
                    />
                  </div>
                </div>
              </div>
              {/* Title  */}
              <div className="relative col-span-2 [grid-column-start:var(--mobile-title)] h-fit w-full overflow-hidden sm:col-span-3 sm:[grid-column-start:var(--desktop-title)]">
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  Title: {story.displayName}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  Genre: {story.genre}
                </p>
              </div>
              {/* Genre  */}
              <div
                className="relative col-span-1 [grid-column-start:var(--mobile-genre)] h-fit w-full self-end overflow-hidden sm:col-span-3 sm:[grid-column-start:var(--desktop-genre)]"
                style={{ gridRowStart: 2 }}
              >
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  Genre: {story.genre}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  {story.screeningDate}
                </p>
              </div>
              {/* Date  */}
              <div className="relative col-span-1 [grid-column-start:var(--mobile-date)] h-fit w-full self-end overflow-hidden sm:col-span-3 sm:[grid-column-start:var(--desktop-date)]">
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  {story.screeningDate}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out sm:group-hover:-translate-y-full">
                  0{story.id}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
