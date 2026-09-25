"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";

function navClassName(pathname: string, href: string, compact: boolean) {
  const active = pathname === href;
  const base = compact
    ? "flex min-w-0 flex-1 flex-col items-center justify-center px-1 py-2 text-center text-[11px] leading-tight"
    : "rounded-lg px-3 py-2 text-sm";

  if (active) {
    return `${base} font-medium text-blue-600`;
  }

  return `${base} text-zinc-600 hover:text-blue-600`;
}

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Основное меню"
      className="hidden items-center gap-1 md:flex"
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={navClassName(pathname, item.href, false)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Основное меню"
      className="fixed inset-x-0 bottom-0 z-10 border-t border-zinc-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="flex">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={navClassName(pathname, item.href, true)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
