import { Story } from "@/types";
import Footer from "./Footer";
import HorizontalScroller from "./HorizontalScroller";
import InfoBar from "./InfoBar";

interface DetailPageProps {
  story: Story;
}

export default function DetailPage({ story }: DetailPageProps) {
  return (
    <section className="pt-header-height flex h-full flex-col">
      {/* Name and info  */}
      <div className="flex items-end gap-20 px-5">
        <div className="flex-1">
          <h1 className="font-bit text-[16vw] leading-[60%] tracking-tight uppercase lg:translate-y-1.5 lg:text-[min(9vw,10rem)]">
            {story.displayName}
          </h1>
        </div>

        {/* Info bar desktop  */}
        <div className="hidden lg:block">
          <InfoBar story={story} />
        </div>

        {/* Number  */}
        <p className="font-bit text-dark text-[8vw] leading-[65%] lg:text-[min(4.5vw,10rem)]">
          (0{story.id})
        </p>
      </div>

      {/* Info bar mobile  */}
      <div className="block lg:hidden">
        <InfoBar story={story} />
      </div>

      {/* Horizontal scroller  */}
      <HorizontalScroller story={story} />

      <Footer />
    </section>
  );
}
