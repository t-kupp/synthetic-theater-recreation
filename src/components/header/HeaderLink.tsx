import { useStore } from "@/store";
import Link from "next/link";
import { ReactNode, RefObject } from "react";

interface HeaderLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  ref?: RefObject<HTMLElement | null>;
}

export default function HeaderLink({ href, children, active }: HeaderLinkProps) {
  const { setShowCustomCursor } = useStore();

  return (
    <Link
      onMouseEnter={() => setShowCustomCursor(false)}
      onMouseLeave={() => setShowCustomCursor(true)}
      href={href}
      className={`translate-y-[1px] uppercase`}
    >
      <span className={`group relative block overflow-hidden`}>
        <span
          className={`${active ? "-translate-y-full" : "group-hover:-translate-y-full"} text-dark relative block transition-all duration-200 ease-out`}
        >
          {children}
        </span>
        <span
          className={`${active ? "-translate-y-full" : "group-hover:-translate-y-full"} text-light absolute top-full left-0 block transition-all duration-200 ease-out group-hover:-translate-y-full`}
        >
          {children}
        </span>
      </span>
    </Link>
  );
}
