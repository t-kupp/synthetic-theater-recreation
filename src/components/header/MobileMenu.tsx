import Link from "next/link";
import ShapeBackground from "./ShapeBackground";

interface MobileMenuProps {
  activePage: string | null;
}

export default function MobileMenu({ activePage }: MobileMenuProps) {
  return (
    <nav className="pt-header-height bg-background fixed inset-0 flex flex-col">
      <div className="relative flex flex-1 flex-col items-center justify-center">
        <ShapeBackground />
        <div className="bg-background absolute bottom-0 h-18 w-full"></div>
      </div>
      <div className="flex flex-col justify-end gap-4 px-4 pt-4 pb-10">
        <Link
          className={
            (activePage === "screening" ? "border-light text-light" : "border-dark text-dark") +
            " self-start rounded-full border px-8 pt-3.5 pb-2 text-2xl uppercase"
          }
          href={"/"}
        >
          001/Screening
        </Link>
        <Link
          className={
            (activePage === "archive" ? "border-light text-light" : "border-dark text-dark") +
            " self-end rounded-full border px-8 pt-3.5 pb-2 text-2xl uppercase"
          }
          href={"/archive"}
        >
          002/Archive
        </Link>
        <Link
          className={
            (activePage === "manifesto" ? "border-light text-light" : "border-dark text-dark") +
            " self-center rounded-full border px-8 pt-3.5 pb-2 text-2xl uppercase"
          }
          href={"/manifesto"}
        >
          003/Manifesto
        </Link>
      </div>
    </nav>
  );
}
