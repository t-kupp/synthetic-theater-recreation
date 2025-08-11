import storiesData from "@/../public/stories/storiesData.json";
import DetailPage from "@/components/detailPage/DetailPage";

export default function index() {
  const { stories } = storiesData;
  const resonance = stories.find((story) => story.title === "resonance") || stories[0];

  return <DetailPage story={resonance} />;
}
