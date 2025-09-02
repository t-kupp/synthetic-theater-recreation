import { useStore } from "@/store";
import { Story } from "@/types";
import Link from "next/link";

interface SummaryProps {
  story: Story;
}

export default function DiscoverLink({ story }: SummaryProps) {
  const { setShowCustomCursor } = useStore();

  return (
    <Link
      href={`/story/${story.title}`}
      className="discover-button border-dark group relative flex h-full items-center justify-center rounded-full border px-4 py-2 uppercase"
      onMouseEnter={() => setShowCustomCursor(false)}
      onMouseLeave={() => setShowCustomCursor(true)}
    >
      <div className="bg-dark absolute bottom-0 h-0 w-0 rounded-full transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></div>
      <span className="relative block overflow-hidden pt-0.5">
        <span className="relative block transition-all duration-200 ease-out group-hover:-translate-y-full">
          Discover full story
        </span>
        <span className="absolute top-full left-0 block transition-all duration-200 ease-out group-hover:-translate-y-full">
          Discover full story
        </span>
      </span>
    </Link>
  );
}
