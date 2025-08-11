import storiesData from "@/../public/stories/storiesData.json";
import BottomLink from "@/components/landingPage/BottomLink";
import Footer from "@/components/landingPage/Footer";
import HorizontalScroller from "@/components/landingPage/HorizontalScroller";
import Summary from "@/components/landingPage/Summary";
const { stories } = storiesData;
const newestStory = stories[stories.length - 1];

export default function Home() {
  return (
    <div className="pt-header-height flex h-full flex-col">
      <HorizontalScroller story={newestStory} />
      <Summary story={newestStory} />
      <BottomLink story={newestStory} />
      <Footer />
    </div>
  );
}
