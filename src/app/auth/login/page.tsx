'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (!res?.ok) {
      setError('Invalid credentials')
    } else {
      window.location.href = '/'
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 w-full"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 w-full"
        placeholder="Password"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <p>Don&apos;t have an account? <Link href="/auth/signup">Sign up</Link></p>
    </form>
  )
}
