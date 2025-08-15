import storiesData from "@/../public/stories/storiesData.json";
import DetailPage from "@/components/detailPage/DetailPage";

export default function index() {
  const { stories } = storiesData;
  const resonance = stories.find((story) => story.title === "resonance") || stories[0];
  const previousStory = stories.find((story) => story.id === resonance.id - 1) || null;

  console.log("previousStory:", previousStory);

  return <DetailPage story={resonance} previousStory={previousStory} />;
}
