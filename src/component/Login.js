import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementasi login akan ditambahkan nanti
    console.log('Login attempt:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
          {/* Logo dan Judul */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Login FinanceManager
            </h1>
            <p className="text-gray-400 mt-2">Selamat datang kembali!</p>
          </div>

          {/* Form Login */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Masukkan email Anda"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Lupa Password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Masukkan password Anda"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded bg-white/5 border-white/10 text-primary focus:ring-primary/50"
              />
              <span className="ml-2 text-sm text-gray-300">Ingat saya</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transform hover:scale-[1.02] transition-all duration-200"
            >
              Masuk
            </button>
          </form>

          {/* Link Register */}
          <p className="mt-6 text-center text-gray-400">
            Belum punya akun?{' '}
            <Link to="/register" className="text-primary hover:text-primary/80 transition-colors">
              Daftar di sini
            </Link>
          </p>

          {/* Kembali ke Dashboard */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Kembali ke Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
