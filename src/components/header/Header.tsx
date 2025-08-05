import { Eye, Gem } from "lucide-react";
import Link from "next/link";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="fixed inset-0 m-5 flex h-12 items-center">
      {/* Logo & name  */}
      <div className="h-full flex-1">
        <Link href={"/"} className="inline-flex h-full items-center gap-2">
          <Gem size={32} className="text-dark -mt-[2px]" />
          <p className="text-xs leading-[1.15] tracking-wider uppercase">
            Synthetic <br />
            Theatre
          </p>
        </Link>
      </div>

      {/* Menu  */}
      <div className="border-dark flex h-full items-center gap-8 rounded-full border px-8 py-4">
        <HeaderLink active href="/">
          001/Screening
        </HeaderLink>
        <HeaderLink href="/archive">002/Archive</HeaderLink>
        <HeaderLink href="/manifesto">003/Manifesto</HeaderLink>
      </div>

      {/* Theme switcher */}
      <div className="flex flex-1 justify-end">
        <button className="border-dark group relative flex h-12 w-12 items-center justify-center rounded-full border">
          <div className="bg-dark absolute h-0 w-0 rounded-full transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></div>
          <span className="relative block overflow-hidden">
            <span className="relative block transition-all duration-200 ease-out group-hover:-translate-y-full">
              <Eye size={20} />
            </span>
            <span className="absolute top-full left-0 block transition-all duration-200 ease-out group-hover:-translate-y-full">
              <Eye size={20} className="text-background" />
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
