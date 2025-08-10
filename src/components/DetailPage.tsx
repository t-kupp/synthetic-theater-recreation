import { Story } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface DetailPageProps {
  story: Story;
}

export default function DetailPage({ story }: DetailPageProps) {
  return (
    <section className="pt-header-height">
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
            <div className="flex flex-col">
              <p className="uppercase">Soundtrack</p>
              <a
                target="_blank"
                className="text-dark group relative overflow-hidden"
                href={story.soundtrack.url}
              >
                <span className="flex uppercase transition-transform ease-in-out group-hover:-translate-y-full">
                  {story.soundtrack?.artist} - {story.soundtrack.title}
                  <ArrowUpRight size={20} className="ml-0.5 -translate-y-0.5 pb-1" />
                </span>
                <span className="absolute top-full flex uppercase transition-transform ease-in-out group-hover:-translate-y-full">
                  {story.soundtrack?.artist} - {story.soundtrack.title}
                  <ArrowUpRight size={20} className="ml-0.5 -translate-y-0.5 pb-1" />
                </span>
              </a>
            </div>
          )}

          {/* Genre  */}
          <div>
            <p className="uppercase">Genre</p>
            <p className="text-dark">{story.genre}</p>
          </div>

          {/* Screening date */}
          {story.screeningDate && (
            <div>
              <p className="uppercase">Screening Date</p>
              <p className="text-dark">{story.screeningDate}</p>
            </div>
          )}

          {/* Number  */}
          <p className="font-bit text-dark text-[8vw] leading-[65%] lg:text-[min(4.5vw,10rem)]">
            (0{story.id})
          </p>
        </div>
      </div>
    </section>
  );
}
