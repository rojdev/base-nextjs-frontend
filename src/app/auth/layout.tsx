import Link from 'next/link';
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <Link href="/" className="top-2 left-2 p-2 text-sm font-semibold dark:bg-white text-black rounded-full">
        Home
      </Link>
      {children}
    </main>
  )
}
