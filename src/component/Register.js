import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementasi register akan ditambahkan nanti
    console.log('Register attempt:', formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
          {/* Logo dan Judul */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Daftar FinanceManager
            </h1>
            <p className="text-gray-400 mt-2">Mulai perjalanan keuangan Anda</p>
          </div>

          {/* Form Register */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>

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
              <label className="text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Buat password Anda"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Konfirmasi Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Konfirmasi password Anda"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="rounded bg-white/5 border-white/10 text-primary focus:ring-primary/50"
                required
              />
              <span className="ml-2 text-sm text-gray-300">
                Saya setuju dengan{' '}
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Syarat dan Ketentuan
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transform hover:scale-[1.02] transition-all duration-200"
            >
              Daftar Sekarang
            </button>
          </form>

          {/* Link Login */}
          <p className="mt-6 text-center text-gray-400">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-primary hover:text-primary/80 transition-colors">
              Login di sini
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

export default Register;
