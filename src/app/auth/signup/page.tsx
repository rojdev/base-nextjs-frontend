'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('http://localhost:9201/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.message || 'Error registering user')
      return
    }

    // Optional: Immediately sign in the user after register
    const loginRes = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (loginRes?.ok) {
      router.push('/')
    } else {
      setError('Registered but login failed.')
    }
  }

  return (
    <form onSubmit={handleRegister} className="space-y-4 max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border p-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full border p-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Sign Up
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
