import ShapeBackground from "@/components/header/ShapeBackground";
import AnimatedText from "@/components/manifesto/AnimatedText";
import ScrollIndicator from "@/components/manifesto/ScrollIndicator";
import TextSection from "@/components/manifesto/TextSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, SplitText } from "gsap/all";
import { useRef, useState } from "react";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showScrollText, setShowScrollText] = useState(true);

  useGSAP(
    () => {
      // Scroll smoother
      ScrollSmoother.create({
        onUpdate: () => {
          if (!contentRef.current) return;
          const top = contentRef.current.getBoundingClientRect().top;
          const bottom = contentRef.current.getBoundingClientRect().bottom - window.innerHeight;
          setShowScrollText(top > -50);
          setShowScrollIndicator(bottom > 300);
        },
        wrapper: containerRef.current,
        content: contentRef.current,
        smooth: 0.3,
        smoothTouch: 0.1,
      });

      // Enter animations
      const tl = gsap.timeline({ delay: 0.25 });
      const marqueeTexts = gsap.utils.toArray(".marquee-text");
      marqueeTexts.forEach((item, i) => {
        const split = SplitText.create(item as Element, {
          type: "lines",
          mask: "lines",
        });
        tl.from(
          split.lines,
          {
            yPercent: 105,
            stagger: 0.075,
          },
          i / 20
        );
      });

      // tl.from(".marquee-text", { yPercent: 100 });
    },
    { scope: containerRef }
  );

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
          <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-48 px-5 sm:mt-32 sm:gap-96">
            <TextSection textLeft index={1}>
              This project is a recreation of{" "}
              <a
                className="text-light border-b-2 transition-opacity hover:opacity-65"
                target="_blank"
                href="https://www.designisfunny.co/"
              >
                Daniele Buffa's
              </a>{" "}
              <a
                target="_blank"
                className="text-light border-b-2 transition-opacity hover:opacity-65"
                href="https://www.synthetictheatre.com/"
              >
                Synthetic Theatre
              </a>
              , an Awwwards-winning passion project that merges AI-generated storytelling with
              sophisticated design systems.
            </TextSection>
            <TextSection index={2}>
              The first time visiting his website was full of "How did he do that?!" and "How does
              this even work?!" That's exactly why I chose this website as my first recreation
              project.
            </TextSection>
            <TextSection index={3} textLeft>
              I was able to analyze complex designs and find solutions within my skillset, with GSAP
              being a core component. I struggled often but was usually able to solve the problem -{" "}
              <a
                href="https://www.notion.so/Synthetic-Theater-Recreation-Struggles-and-solutions-245bd2cf34098018b70ff728439a60e2?source=copy_link"
                target="_blank"
                className="text-light border-b-2 transition-opacity hover:opacity-65"
              >
                some of them documented here
              </a>
              .
            </TextSection>
            <TextSection index={4}>
              It's not groundbreaking work - I recreated someone else's vision. But I built
              solutions for dynamic grid positioning, infinite scrolling animations, and draggable
              galleries that respond to real-time interactions.
            </TextSection>
          </div>

          {/* Contact  */}
          <div className="mt-64 flex flex-col items-center gap-8">
            <p className="font-bit w-full text-center text-[2rem] uppercase sm:text-[4rem]">
              Want to get in touch?
            </p>
            <a
              href="mailto:kupper.thorge@gmail.com"
              className="border-dark group relative flex h-full w-fit items-center justify-center rounded-full border px-4 py-2 uppercase"
            >
              <div className="bg-dark absolute bottom-0 h-0 w-0 rounded-full transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></div>
              <span className="relative block translate-y-[1px] overflow-hidden pt-0.5">
                <span className="relative block transition-all duration-200 ease-out group-hover:-translate-y-full">
                  Drop me a message
                </span>
                <span className="absolute top-full left-0 block transition-all duration-200 ease-out group-hover:-translate-y-full">
                  Drop me a message
                </span>
              </span>
            </a>
          </div>

          {/* Design by  */}
          <div className="mt-48 px-5 pb-5 text-center uppercase sm:mt-96 sm:pb-0 sm:text-left">
            <p className="text-dark">Design by</p>
            <a href="https://www.designisfunny.co/" className="inline-block">
              <p className="underline">Daniele Buffa (Design is Funny)</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
