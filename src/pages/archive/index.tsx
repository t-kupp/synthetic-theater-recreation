import storiesData from "@/../public/stories/storiesData.json";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  const { stories } = storiesData;
  const spans = {
    index: [3, 6, 1],
    title: [13, 10, 7],
    genre: [12, 13, 9],
    date: [1, 7, 3],
    image: [8, 2, 13],
  };

  return (
    <section className="pt-header-height flex h-full flex-col px-5">
      {/* Header  */}
      <header className="font-bit mb-16 flex items-end justify-between uppercase">
        <h1 className="font-bit text-[16vw] leading-[60%] tracking-tight uppercase lg:translate-y-1.5 lg:text-[min(9vw,10rem)]">
          Archive
        </h1>
        <p className="font-bit text-dark text-[8vw] leading-[65%] lg:text-[min(4.5vw,10rem)]">
          (0{stories.length})
        </p>
      </header>

      {/* List  */}
      {stories.map((story, index) => {
        const i = index % spans.index.length;

        return (
          <Link
            href={`/story/${story.title}`}
            key={story.id}
            style={{ translate: `0px -${i * 2}px` }}
            className="border-dark hover:border-light border-y-2 py-8 transition-colors hover:z-[1]"
          >
            <div className="group grid h-32 grid-cols-[repeat(16,1fr)] grid-rows-[repeat(2,1fr)] gap-3">
              {/* Index  */}
              <div
                className="relative col-span-3 h-fit w-full overflow-hidden"
                style={{ gridColumnStart: spans.index[i] }}
              >
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out group-hover:-translate-y-full">
                  0{story.id}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out group-hover:-translate-y-full">
                  Title: {story.displayName}
                </p>
              </div>
              {/* Image  */}
              <div
                className="col-span-4 flex items-center justify-center"
                style={{
                  gridColumnStart: spans.image[i],
                  gridRow: "1 / 3",
                }}
              >
                <div className="relative aspect-auto h-full w-full overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2">
                    <Image
                      className="h-full w-full scale-50 object-cover transition-transform duration-400 ease-out group-hover:scale-100"
                      height={1024}
                      width={1024}
                      src={`/stories/${story.title}/${story.images[0].src}`}
                      alt={`/stories/${story.title}/${story.images[0].alt}`}
                    />
                  </div>
                </div>
              </div>
              {/* Title  */}
              <div
                style={{ gridColumnStart: spans.title[i] }}
                className="relative col-span-3 h-fit w-full overflow-hidden"
              >
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out group-hover:-translate-y-full">
                  Title: {story.displayName}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out group-hover:-translate-y-full">
                  Genre: {story.genre}
                </p>
              </div>
              {/* Genre  */}
              <div
                style={{ gridColumnStart: spans.genre[i], gridRowStart: 2 }}
                className="relative col-span-3 h-fit w-full self-end overflow-hidden"
              >
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out group-hover:-translate-y-full">
                  Genre: {story.genre}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out group-hover:-translate-y-full">
                  {story.screeningDate}
                </p>
              </div>
              {/* Date  */}
              <div
                style={{ gridColumnStart: spans.date[i] }}
                className="relative col-span-3 h-fit w-full self-end overflow-hidden"
              >
                {/* 1 */}
                <p className="archive-text truncate transition-transform ease-out group-hover:-translate-y-full">
                  {story.screeningDate}
                </p>
                {/* 2 */}
                <p className="archive-text absolute top-full truncate transition-transform ease-out group-hover:-translate-y-full">
                  0{story.id}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
