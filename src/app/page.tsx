import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button><Link className="absolute top-2 left-2 p-2 text-sm font-semibold dark:bg-white text-black rounded-full" href="/auth/login">Log in</Link></button>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hi, I&apos;m Working</h1>
      </main>
    </div>
  );
}
