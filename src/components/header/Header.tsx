import { ArrowLeft, Eye, Gem, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderLink from "./HeaderLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [title, setTitle] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Change header on detail page
    if (pathname.includes("/story")) {
      setIsDetailPage(true);
      const pathnameSplit = pathname.split("/");
      setTitle(pathnameSplit[pathnameSplit.length - 1]);
    } else {
      setIsDetailPage(false);
    }

    // Close mobile menu on route change
    function handleRouteChange() {
      setShowMobileMenu(false);
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, pathname]);

  function getActivePage(pathname: string) {
    if (pathname === "/") {
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
      <header className="fixed inset-0 z-40 m-5 flex h-12 items-center">
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
        {isDetailPage ? (
          // Back button and story title in detail page
          <div className="hidden gap-2 lg:flex">
            <Link href={"/"}>
              <div className="border-dark group bg-background relative flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-400">
                <div className="bg-background group-hover:bg-dark absolute top-1/2 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[height,width] duration-300 ease-out group-hover:h-full group-hover:w-full"></div>
                <div className="relative overflow-hidden">
                  <ArrowLeft className="transition-transform duration-300 ease-out group-hover:-translate-y-full" />
                  <ArrowLeft className="absolute top-full transition-transform duration-300 ease-out group-hover:-translate-y-full" />
                </div>
              </div>
            </Link>
            <div className="border-dark group bg-background relative flex h-12 items-center justify-center rounded-full border px-8 transition-colors duration-400">
              <p className="translate-y-[1px] uppercase">{title}</p>
            </div>
          </div>
        ) : (
          // Nav menu
          <div className="border-dark bg-background hidden h-full items-center gap-8 rounded-full border px-8 py-4 transition-colors duration-400 lg:flex">
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
        )}

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
              className="border-dark bg-background group relative flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-400"
            >
              <div className="bg-dark absolute h-0 w-0 rounded-full transition-colors duration-400 ease-out group-hover:h-full group-hover:w-full"></div>
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
