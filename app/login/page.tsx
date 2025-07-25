'use client';

import { useState } from 'react';
import api from '@/lib/axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // 1. Obtener la cookie CSRF
            await api.get('/sanctum/csrf-cookie');

            // 2. Intentar el login (axios enviará el token automáticamente)
            const response = await api.post('/api/login', {
                email,
                password,
            });

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
