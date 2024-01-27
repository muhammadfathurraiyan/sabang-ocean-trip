import Link from "next/link";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lang}`}>back</Link>
    </>
  );
}
