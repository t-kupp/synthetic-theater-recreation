import ShapeBackground from "@/components/header/ShapeBackground";
import AnimatedText from "@/components/manifesto/AnimatedText";
import TextSection from "@/components/manifesto/TextSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
      },
    });

    tl.to(manifestoRef.current, { yPercent: -100, ease: "none" });
  });

  return (
    <div ref={containerRef} className="h-[100svh]">
      <section ref={manifestoRef} className="h-full">
        {/* Marquee texts  */}
        <div className="relative h-full">
          <div className="pt-header-height absolute inset-0 z-[1] flex flex-col gap-y-4 overflow-hidden md:mt-16 md:gap-y-1">
            <AnimatedText leftPercent={5} text="If I'm to" direction="right" />
            <AnimatedText leftPercent={15} text="Disappear" direction="left" />
            <AnimatedText leftPercent={50} text="So would" direction="left" />
            <AnimatedText leftPercent={35} text="You" direction="right" />
            <AnimatedText leftPercent={3} text="But in your" direction="left" />
            <AnimatedText leftPercent={50} text="Absence" direction="right" />
            <AnimatedText leftPercent={2} text="I would" direction="left" />
            <AnimatedText leftPercent={30} text="Continue" direction="left" />
            <AnimatedText leftPercent={65} text="To exist" direction="left" />
          </div>
          <div className="absolute inset-0">
            <ShapeBackground />
            <div className="bg-background absolute bottom-0 h-full w-full mix-blend-difference"></div>
          </div>
        </div>
        {/* Manifesto texts  */}
        <div className="flex flex-col gap-72 px-5">
          <TextSection index={1}>
            This website is a recreation of{" "}
            <a
              target="_blank"
              className="text-light border-b transition-colors hover:border-transparent"
              href="https://www.designisfunny.co/"
            >{`Daniele Buffa's`}</a>{" "}
            wonderful passion project{" "}
            <a
              target="_blank"
              className="text-light border-b transition-colors hover:border-transparent"
              href="https://www.synthetictheatre.com/"
            >
              Synthetic Theatre
            </a>
            . "It is a realm where stories unravel, and where visual freedom is at the core."
          </TextSection>
          <TextSection index={2} reversed>
            I chose this website to recreate because, as a passion project, it is free from
            conventional limitations like client constraints or budget limits. Pure creative
            freedom.
          </TextSection>
          <TextSection index={3}>
            This recreation is not perfect. But "Make it work with my current skills" forced
            creative solutions I wouldn't have discovered otherwise.
          </TextSection>
          <TextSection index={4} reversed>
            hi
          </TextSection>
          <TextSection index={5}>hi</TextSection>
        </div>
      </section>
    </div>
  );
}
