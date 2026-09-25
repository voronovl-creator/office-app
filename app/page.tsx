import Link from "next/link";
import { NAV_ITEMS } from "@/lib/nav";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-zinc-100 p-6 sm:p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Учёт офисов
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Простой учёт помещений, арендаторов, коммунальных платежей, персонала
          и затрат. Выберите раздел, чтобы открыть его.
        </p>
      </section>
      <section className="grid gap-3 sm:grid-cols-2">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl bg-zinc-100 p-5 transition-colors hover:bg-zinc-200"
          >
            <h2 className="text-base font-medium text-blue-600">{item.label}</h2>
            <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
