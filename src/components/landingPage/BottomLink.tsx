import { Story } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { ReactNode, useRef } from "react";
import DiscoverLink from "./DiscoverLink";

interface BottomLinkProps {
  story: Story;
  isEndCard?: boolean;
  children?: ReactNode;
  className?: string;
}

export default function BottomLink({
  story,
  isEndCard = false,
  children,
  className,
}: BottomLinkProps) {
  const bottomLinkSectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      tl.to(".title", { yPercent: -100, ease: "expo.inOut", duration: 1.2 });
      tl.fromTo(
        ".arrow-right",
        { xPercent: -100, ease: "expo.inOut", duration: 1.2 },
        { xPercent: 0, ease: "expo.inOut", duration: 1.2, stagger: -0.03 },
        "<"
      );
      timelineRef.current = tl;
    },
    { scope: bottomLinkSectionRef }
  );

  return (
    <>
      <div
        ref={bottomLinkSectionRef}
        className={"my-auto mb-8 flex items-end justify-between px-5 lg:my-8" + ` ${className}`}
      >
        <Link
          href={`/story/${story.title}`}
          className={(isEndCard ? "w-full" : "w-auto") + " relative -mb-5 flex flex-col md:-mb-0"}
          onMouseEnter={() => timelineRef.current?.play()}
          onMouseLeave={() => timelineRef.current?.reverse()}
        >
          {children}
          <div className={isEndCard ? "lg:ml-5" : ""}>
            <h1 className="font-bit relative overflow-hidden text-[4.5rem] !leading-[65%] uppercase md:text-[10rem]">
              <span className="title relative block">{story.displayName}</span>
              <span className="title absolute top-full block">{story.displayName}</span>
            </h1>
            <div className="w-[110px] -translate-x-[18px] scale-[60%] overflow-x-hidden md:-translate-x-0 md:scale-100">
              <div className="text-dark relative flex h-20 w-[360px] -translate-x-[50px] flex-nowrap">
                <ArrowRight className="arrow-right absolute left-0/18" width={120} />
                <ArrowRight className="arrow-right absolute left-1/18" width={120} />
                <ArrowRight className="arrow-right absolute left-2/18" width={120} />
                <ArrowRight className="arrow-right absolute left-6/18" width={120} />
                <ArrowRight className="arrow-right absolute left-7/18" width={120} />
                <ArrowRight className="arrow-right absolute left-8/18" width={120} />
              </div>
            </div>
          </div>
        </Link>
        {!isEndCard && (
          <div className="font-bit text-dark right-5 bottom-5 text-[2rem] !leading-[0.6] md:text-[3.2rem]">{`(0${story.id})`}</div>
        )}
      </div>
      {!isEndCard && (
        <div className="mb-8 flex w-full items-center justify-center lg:hidden">
          <DiscoverLink story={story} />
        </div>
      )}
    </>
  );
}

function ArrowRight({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number | string;
  height?: number | string;
}) {
  return (
    <div className={className} style={{ width: width, height: height }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 12 7" fill="none">
        <rect x="-4" y="3" width="1" height="1" fill="currentColor" />
        <rect x="-3" y="3" width="1" height="1" fill="currentColor" />
        <rect x="-2" y="3" width="1" height="1" fill="currentColor" />
        <rect x="-1" y="3" width="1" height="1" fill="currentColor" />
        <rect x="0" y="3" width="1" height="1" fill="currentColor" />
        <rect x="1" y="3" width="1" height="1" fill="currentColor" />
        <rect x="2" y="3" width="1" height="1" fill="currentColor" />
        <rect x="3" y="3" width="1" height="1" fill="currentColor" />
        <rect x="4" y="3" width="1" height="1" fill="currentColor" />
        <rect x="5" y="3" width="1" height="1" fill="currentColor" />
        <rect x="6" y="3" width="1" height="1" fill="currentColor" />
        <rect x="4" y="0" width="1" height="1" fill="currentColor" />
        <rect x="5" y="1" width="1" height="1" fill="currentColor" />
        <rect x="6" y="2" width="1" height="1" fill="currentColor" />
        <rect x="7" y="3" width="1" height="1" fill="currentColor" />
        <rect x="6" y="4" width="1" height="1" fill="currentColor" />
        <rect x="5" y="5" width="1" height="1" fill="currentColor" />
        <rect x="4" y="6" width="1" height="1" fill="currentColor" />
      </svg>
    </div>
  );
}
