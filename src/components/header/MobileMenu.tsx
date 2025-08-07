import Link from "next/link";
import ShapeBackground from "./ShapeBackground";

export default function MobileMenu() {
  return (
    <nav className="pt-header-height bg-background fixed inset-0">
      <div className="relative flex h-[calc(100%-248px)] flex-col items-center justify-center">
        <ShapeBackground />
      </div>
      <div className="flex flex-col justify-end gap-4 px-4 pt-4 pb-8">
        <Link
          className="border-dark self-start rounded-full border px-8 pt-3.5 pb-2 text-2xl uppercase"
          href={"/"}
        >
          001/Screening
        </Link>
        <Link
          className="border-dark self-end rounded-full border px-8 pt-3.5 pb-2 text-2xl uppercase"
          href={"/archive"}
        >
          002/Archive
        </Link>
        <Link
          className="border-dark self-center rounded-full border px-8 pt-3.5 pb-2 text-2xl uppercase"
          href={"/manifesto"}
        >
          003/Manifesto
        </Link>
      </div>
    </nav>
  );
}
