import { Eye, Gem, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderLink from "./HeaderLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleRouteChange() {
      setShowMobileMenu(false);
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  function getActivePage(pathname: string) {
    if (pathname === "/" || pathname.includes("/story")) {
      return "screening";
    }
    if (pathname.includes("/archive")) {
      return "archive";
    }
    if (pathname.includes("/manifesto")) {
      return "manifesto";
    }
    return null;
  }

  const activePage = getActivePage(pathname);

  function cycleThemes() {
    let newTheme = currentTheme + 1;
    if (newTheme > 4) newTheme = 0;

    setCurrentTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme.toString());
  }

  return (
    <>
      <header className="fixed inset-0 z-[9999] m-5 flex h-12 items-center">
        {/* Logo & name  */}
        <div className="h-full flex-1">
          <Link href={"/"} className="inline-flex h-full items-center gap-2">
            <Gem size={32} className="text-dark -mt-[2px]" />
            <p className="hidden text-xs tracking-wider uppercase md:block">
              Neural <br />
              Canvas
            </p>
          </Link>
        </div>
        {/* Menu desktop */}
        <div className="border-dark bg-background hidden h-full items-center gap-8 rounded-full border px-8 py-4 lg:flex">
          <HeaderLink active={activePage === "screening"} href="/">
            001/Screening
          </HeaderLink>
          <HeaderLink active={activePage === "archive"} href="/archive">
            002/Archive
          </HeaderLink>
          <HeaderLink active={activePage === "manifesto"} href="/manifesto">
            003/Manifesto
          </HeaderLink>
        </div>
        <div className="flex flex-1 justify-end gap-2">
          {/* Theme switcher */}
          <button
            onClick={cycleThemes}
            className="border-dark group bg-background relative flex h-12 w-12 items-center justify-center rounded-full border"
          >
            <div className="bg-dark absolute h-0 w-0 rounded-full transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></div>
            <span className="relative block overflow-hidden">
              <span className="relative block transition-all duration-200 ease-out group-hover:-translate-y-full">
                <Eye size={20} className="text-white/50" />
              </span>
              <span className="absolute top-full left-0 block transition-all duration-200 ease-out group-hover:-translate-y-full">
                <Eye size={20} className="text-black" />
              </span>
            </span>
          </button>

          {/* Menu mobile button*/}
          <div className="flex lg:hidden">
            <button
              onClick={() => setShowMobileMenu((prev) => !prev)}
              className="border-dark bg-background group relative flex h-12 w-12 items-center justify-center rounded-full border"
            >
              <div className="bg-dark absolute h-0 w-0 rounded-full transition-all duration-200 ease-out group-hover:h-full group-hover:w-full"></div>
              <span className="relative">{showMobileMenu ? <X size={20} /> : <Menu />}</span>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile menu modal  */}
      <div
        className={`${showMobileMenu ? "opacity-100" : "pointer-events-none opacity-0"} absolute top-0 left-0 z-10 h-full transition-opacity duration-500`}
      >
        <MobileMenu activePage={activePage} />
      </div>
    </>
  );
}
