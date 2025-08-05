import Header from "@/components/header/Header";
import HorizontalScroller from "@/components/horizontalScroller/HorizontalScroller";

import storiesData from "@/../public/stories/storiesData.json";
import BottomLink from "@/components/BottomLink";
import Summary from "@/components/Summary";
const { stories } = storiesData;
const newestStory = stories[stories.length - 1];

export default function Home() {
  return (
    <div className="pt-header-height flex min-h-screen flex-col">
      <Header />
      <HorizontalScroller data={newestStory} />
      <Summary summarySegments={newestStory.summarySegments} />
      <BottomLink data={newestStory} />
    </div>
  );
}
