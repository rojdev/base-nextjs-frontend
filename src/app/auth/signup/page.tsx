'use client';

import Link from "next/link";

export default function SignUpPage() {
  return (
    <div>
      <form action="/api/auth/signup" method="POST" className="flex flex-col gap-4 p-8 max-w-md mx-auto">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit" className="p-2 text-sm font-semibold dark:bg-white text-black rounded-full">Sign Up</button>
        <p>
            Already have an account? <Link href="/auth/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
