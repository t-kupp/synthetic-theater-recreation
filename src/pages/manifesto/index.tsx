import ShapeBackground from "@/components/header/ShapeBackground";
import AnimatedText from "@/components/manifesto/AnimatedText";
import ScrollIndicator from "@/components/manifesto/ScrollIndicator";
import TextSection from "@/components/manifesto/TextSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showScrollText, setShowScrollText] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline({
      onUpdate: () => {
        setShowScrollText(tl.progress() < 0.1);
        setShowScrollIndicator(tl.progress() < 0.9);
      },
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=1000",
      },
    });

    tl.to(manifestoRef.current, {
      // ??? Why does this kinda work
      y: -(manifestoRef.current?.clientHeight - window.innerHeight),
      ease: "none",
    });
  });

  return (
    <div ref={containerRef} className="h-screen overflow-y-hidden">
      {/* Scroll indicator  */}
      <ScrollIndicator showScrollText={showScrollText} showScrollIndicator={showScrollIndicator} />
      <section ref={manifestoRef}>
        <div className="relative h-screen">
          {/* Background shape  */}
          <div className="absolute inset-0 h-full">
            <div className="bg-background absolute bottom-0 h-full w-full mix-blend-difference"></div>
            <ShapeBackground />
            <div className="bg-background absolute bottom-6 h-12 w-full"></div>
          </div>
          {/* Marquee texts  */}
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
        </div>

        {/* Manifesto texts  */}
        <div className="mt-32 flex flex-col gap-72 px-5">
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
