'use client';

import { useState } from 'react';
import api from '@/lib/axios';

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return decodeURIComponent(match[2]);
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 1. Obtener cookies de Laravel Sanctum
      await api.get('/sanctum/csrf-cookie', {
        withCredentials: true,
      });

      // 2. Extraer XSRF-TOKEN desde cookies
      const xsrfToken = getCookie('XSRF-TOKEN');
      if (!xsrfToken) {
        throw new Error('No se pudo obtener el XSRF-TOKEN.');
      }

      // 3. Enviar POST con credenciales + token CSRF
      const response = await api.post(
        '/login',
        { email, password },
        {
          withCredentials: true,
          headers: {
            'X-XSRF-TOKEN': xsrfToken,
          },
        }
      );

      alert('Login correcto');
      console.log(response.data);
    } catch (error) {
      alert('Login fallido');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
