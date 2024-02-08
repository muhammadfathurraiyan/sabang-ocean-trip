export default function Body({ title, text }: { title: string; text: string }) {
  return (
    <div className="w-full flex my-12 flex-col gap-6">
      <h1 className="font-bold leading-snug text-6xl max-lg:text-5xl text-sky-600 dark:text-slate-100">
        {title}
      </h1>
      <p className="text-lg max-lg:text-base">{text}</p>
    </div>
  );
}
