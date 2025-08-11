import { Story } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Footer from "./Footer";
import HorizontalScroller from "./HorizontalScroller";

interface DetailPageProps {
  story: Story;
}

export default function DetailPage({ story }: DetailPageProps) {
  return (
    <section className="pt-header-height flex h-full flex-col">
      {/* Name and info  */}
      <div className="flex items-end px-5">
        <div className="flex-1">
          <h1 className="font-bit translate-y-1.5 text-[min(9rem,16vh)] leading-[60%] tracking-tight uppercase">
            {story.displayName}
          </h1>
        </div>

        <div className="flex items-end gap-20 text-[11px]">
          {/* Soundtrack  */}
          {story.soundtrack && (
            <div className="uppercase">
              <p>Soundtrack</p>
              <a
                href="https://youtu.be/QpxFcMYRV08?si=nOFCyAS8hOpFYS-c"
                target="_blank"
                className=""
              >
                <div className="group relative overflow-hidden">
                  <p className="text-dark flex items-end gap-2 transition-transform ease-in-out group-hover:-translate-y-full">
                    {story.soundtrack.artist} - {story.soundtrack.title}
                    <ArrowUpRight className="-translate-y-[1px]" size={16} />
                  </p>
                  <p className="text-dark absolute top-full flex items-end gap-2 transition-transform ease-in-out group-hover:-translate-y-full">
                    {story.soundtrack.artist} - {story.soundtrack.title}
                    <ArrowUpRight className="-translate-y-[1px]" size={16} />
                  </p>
                </div>
              </a>
            </div>
          )}

          {/* Genre  */}
          <div className="uppercase">
            <p className="">Genre</p>
            <p className="text-dark">{story.genre}</p>
          </div>

          {/* Screening date */}
          {story.screeningDate && (
            <div className="uppercase">
              <p className="">Screening Date</p>
              <p className="text-dark">{story.screeningDate}</p>
            </div>
          )}

          {/* Number  */}
          <p className="font-bit text-dark text-[8vw] leading-[65%] lg:text-[min(4.5vw,10rem)]">
            (0{story.id})
          </p>
        </div>
      </div>

      {/* Horizontal scroller  */}
      <HorizontalScroller story={story} />
      <Footer />
    </section>
  );
}
