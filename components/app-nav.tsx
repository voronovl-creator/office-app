"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";
import { useRole } from "@/lib/use-role";
import { createClient } from "@/lib/supabase/client";

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
  const { role } = useRole();

  const items = NAV_ITEMS.filter((item) =>
    role ? item.roles.includes(role) : false
  );

  return (
    <nav
      aria-label="Основное меню"
      className="hidden items-center gap-1 md:flex"
    >
      {items.map((item) => (
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
  const { role } = useRole();

  const items = NAV_ITEMS.filter((item) =>
    role ? item.roles.includes(role) : false
  );

  return (
    <nav
      aria-label="Основное меню"
      className="fixed inset-x-0 bottom-0 z-10 border-t border-zinc-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="flex">
        {items.map((item) => (
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

export function UserBox() {
  const router = useRouter();
  const { loading, email, role } = useRole();
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  if (loading || !email) {
    return null;
  }

  const roleLabel =
    role === "admin"
      ? "Администратор"
      : role === "operator"
        ? "Оператор"
        : role === "guest"
          ? "Гость"
          : "";

  return (
    <div className="flex items-center gap-3">
      <div className="hidden text-right text-xs leading-tight sm:block">
        <div className="text-zinc-700">{email}</div>
        <div className="text-zinc-400">{roleLabel}</div>
      </div>
      <button
        onClick={handleLogout}
        className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
      >
        Выйти
      </button>
    </div>
  );
}