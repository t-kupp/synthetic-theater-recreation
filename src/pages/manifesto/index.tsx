import ShapeBackground from "@/components/header/ShapeBackground";
import AnimatedText from "@/components/manifesto/AnimatedText";
import ScrollIndicator from "@/components/manifesto/ScrollIndicator";
import TextSection from "@/components/manifesto/TextSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showScrollText, setShowScrollText] = useState(true);

  useGSAP(() => {
    ScrollSmoother.create({
      onUpdate: () => {
        if (!contentRef.current) return;
        const top = contentRef.current.getBoundingClientRect().top;
        const bottom = contentRef.current.getBoundingClientRect().bottom - window.innerHeight;
        setShowScrollText(top > -50);
        setShowScrollIndicator(bottom > 300);
        console.log("bottom:", bottom);
      },
      wrapper: containerRef.current,
      content: contentRef.current,
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  return (
    <>
      {/* Scroll indicator  */}
      <ScrollIndicator showScrollText={showScrollText} showScrollIndicator={showScrollIndicator} />
      <div ref={containerRef} className="h-screen">
        <section ref={contentRef}>
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
          <div className="mx-auto mt-32 flex max-w-7xl flex-col gap-72 px-5">
            <TextSection index={1}>
              This project is a recreation of{" "}
              <a
                className="text-light border-b-2"
                target="_blank"
                href="https://www.designisfunny.co/"
              >
                Daniele Buffa's
              </a>{" "}
              <a
                target="_blank"
                className="text-light border-b-2"
                href="https://www.synthetictheatre.com/"
              >
                Synthetic Theatre
              </a>
              , an Awwwards-winning passion project that merges AI-generated storytelling with
              sophisticated design systems.
            </TextSection>
            <TextSection index={2} reversed>
              The first time visiting his website was full of "How did he do that?!" and "How does
              this even work?!" That's exactly why I chose this website as my first recreation
              project.
            </TextSection>
            <TextSection index={3}>
              I was able to analyze complex designs and find solutions within my skillset, with GSAP
              being a core component. I struggled often but was usually able to solve the problem -{" "}
              <a
                href="https://www.notion.so/Synthetic-Theater-Recreation-Struggles-and-solutions-245bd2cf34098018b70ff728439a60e2?source=copy_link"
                target="_blank"
                className="text-light border-b-2"
              >
                some of them documented here
              </a>
              .
            </TextSection>
            <TextSection index={4} reversed>
              It's not groundbreaking work - I recreated someone else's vision. But I built
              solutions for dynamic grid positioning, infinite scrolling animations, and draggable
              galleries that respond to real-time interactions.
            </TextSection>
          </div>
        </section>
      </div>
    </>
  );
}
