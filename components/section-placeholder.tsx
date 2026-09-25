export function SectionPlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl bg-zinc-100 p-6 sm:p-8">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h1>
      <p className="mt-2 max-w-2xl text-zinc-600">{description}</p>
    </article>
  );
}
