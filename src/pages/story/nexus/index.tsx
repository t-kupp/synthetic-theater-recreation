import storiesData from "@/../public/stories/storiesData.json";
import DetailPage from "@/components/detailPage/DetailPage";

export default function index() {
  const { stories } = storiesData;
  const nexus = stories.find((story) => story.title === "nexus") || stories[0];
  const previousStory = stories.find((story) => story.id === nexus.id - 1) || null;

  return <DetailPage story={nexus} previousStory={previousStory} />;
}
