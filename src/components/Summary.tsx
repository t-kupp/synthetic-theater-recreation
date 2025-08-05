import Link from "next/link";

interface SummaryProps {
  summarySegments: string[];
}

export default function Summary({ summarySegments }: SummaryProps) {
  return (
    <div className="my-auto grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-5 px-5 py-10">
      {summarySegments.map((segment, i) => (
        <p key={i} className="text-dark text-[11px]">
          <span className="block">{`//${i + 1}`}</span>
          <span>{segment}</span>
        </p>
      ))}
      <div className="h-[36px] self-center">
        <Link
          href={"/story/nexus"}
          className="border-dark group relative flex h-full items-center justify-center rounded-full border px-4 uppercase"
        >
          <div className="bg-dark absolute bottom-0 h-0 w-0 rounded-full transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></div>
          <span className="relative block translate-y-[1px] overflow-hidden">
            <span className="relative block transition-all duration-200 ease-out group-hover:-translate-y-full">
              Discover full story
            </span>
            <span className="absolute top-full left-0 block transition-all duration-200 ease-out group-hover:-translate-y-full">
              Discover full story
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
