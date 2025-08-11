import { Story } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface InfoBarProps {
  story: Story;
}

export default function InfoBar({ story }: InfoBarProps) {
  return (
    <div className="mt-10 flex items-end justify-between px-5 text-[11px] lg:mt-0 lg:gap-20 lg:px-0">
      {/* Soundtrack  */}
      {story.soundtrack && (
        <div className="uppercase">
          <p>Soundtrack</p>
          <a href="https://youtu.be/QpxFcMYRV08?si=nOFCyAS8hOpFYS-c" target="_blank" className="">
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
    </div>
  );
}
