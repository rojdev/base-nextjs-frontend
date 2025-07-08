'use client'

import Link from "next/link"
export default function LoginPage() {
  return (
    <div>
      <Link href="/" className="top-2 left-2 p-2 text-sm font-semibold dark:bg-white text-black rounded-full">
        Home
      </Link>

      <form action="/login" className="flex flex-col gap-4 p-8 max-w-md mx-auto">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" className="p-2 text-sm font-semibold dark:bg-white text-black rounded-full">Log in</button>
        <p>Don&apos;t have an account? <Link href="/auth/signup">Sign up</Link></p>
      </form>
    </div>
  )
}