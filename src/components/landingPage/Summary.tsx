import { Story } from "@/types";
import DiscoverLink from "./DiscoverLink";

interface SummaryProps {
  story: Story;
}

export default function Summary({ story }: SummaryProps) {
  return (
    <div className="my-auto hidden grid-cols-[1fr_1fr_1fr_1fr_auto] gap-5 px-5 py-10 lg:grid">
      {story.summarySegments.map((segment, i) => (
        <p key={i} className="text-dark text-[11px]">
          <span className="block">{`//${i + 1}`}</span>
          <span>{segment}</span>
        </p>
      ))}
      <div className="h-[36px] self-center">
        <DiscoverLink story={story} />
      </div>
    </div>
  );
}
