import { useStore } from "@/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Gem } from "lucide-react";
import { useRef, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gemContainerRef = useRef<HTMLDivElement>(null);
  const { setLoadingComplete } = useStore();

  useGSAP(() => {
    const tl = gsap.timeline({
      onUpdate: function () {
        const timelineProgress = this.progress();
        const easedProgress = gsap.parseEase("power1.out")(timelineProgress);
        setProgress(Math.round(easedProgress * 100));
      },
      onComplete: () => {
        // Last sequence in onComplete because of the progress display
        const tl = gsap.timeline({ delay: 0.5 });
        tl.to(gemContainerRef.current, {
          yPercent: -300,
          duration: 1,
          ease: "expo.inOut",
        });
        tl.to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              containerRef.current?.classList.add("hidden");
              setLoadingComplete(true);
            },
          },
          ">-0.2"
        );
      },
    });

    tl.to(gemContainerRef.current, {
      filter: "blur(0px)",
      opacity: 1,
      duration: 3,
      ease: "power1.out",
    });
    tl.to(gemContainerRef.current, { yPercent: -100, duration: 1, ease: "expo.inOut" }, 1);
    tl.to(gemContainerRef.current, { yPercent: -200, duration: 1, ease: "expo.inOut" }, ">+0.5");
  });

  return (
    <div ref={containerRef} className="bg-background fixed inset-0 z-50 h-screen w-screen">
      <div ref={gemContainerRef} className="h-full w-full opacity-0 blur-2xl">
        <Gem className="gem1 text-dark h-full w-full" />
        <Gem className="gem2 text-dark h-full w-full rotate-180" />
        <Gem className="gem3 text-dark h-full w-full" />
      </div>
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-center">
        <p className="px-16 text-center uppercase">
          This site is a recreation of{" "}
          <a
            href="https://www.synthetictheatre.com/"
            target="_blank"
            className="border-light border-b text-nowrap"
          >
            Daniele Buffa&apos;s Synthetic Theater
          </a>
        </p>
        <p className="absolute right-5">{progress}%</p>
      </div>
    </div>
  );
}
