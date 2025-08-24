import { Story } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface InfoBarProps {
  story: Story;
}

export default function InfoBar({ story }: InfoBarProps) {
  return (
    <div className="mt-10 flex w-full items-end justify-between px-5 text-[11px] lg:ml-auto lg:max-w-[450px] lg:px-0">
      {/* Soundtrack  */}
      {story.soundtrack?.artist && story.soundtrack?.title && (
        <div className="uppercase">
          <p className="info-item">Soundtrack</p>
          <a href="https://youtu.be/QpxFcMYRV08?si=nOFCyAS8hOpFYS-c" target="_blank" className="">
            <div className="group relative overflow-hidden">
              <p className="info-item text-dark flex items-end transition-transform ease-in-out group-hover:-translate-y-full">
                {story.soundtrack.artist} - {story.soundtrack.title}
                <ArrowUpRight className="ml-2 inline-block -translate-y-[1px]" size={16} />
              </p>
              <p className="text-dark absolute top-full flex items-end transition-transform ease-in-out group-hover:-translate-y-full">
                {story.soundtrack.artist} - {story.soundtrack.title}
                <ArrowUpRight className="ml-2 inline-block -translate-y-[1px]" size={16} />
              </p>
            </div>
          </a>
        </div>
      )}

      {/* Genre  */}
      {story.genre && (
        <div className="uppercase">
          <p className="info-item text-nowrap">Genre</p>
          <p className="text-dark info-item text-nowrap">{story.genre}</p>
        </div>
      )}

      {/* Screening date */}
      {story.screeningDate && (
        <div className="uppercase">
          <p className="info-item text-nowrap">Screening Date</p>
          <p className="text-dark info-item text-nowrap">{story.screeningDate}</p>
        </div>
      )}
    </div>
  );
}
