import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      weekly: true,
      monthly: true,
    },
    currency: 'IDR',
    language: 'id',
    theme: 'dark',
    budget: {
      startDay: 1,
      monthlyIncome: 8000000,
      savingsGoal: 30,
    },
    categories: {
      income: ['Gaji', 'Bonus', 'Investasi', 'Lainnya'],
      expense: ['Sewa', 'Makan', 'Transport', 'Hiburan', 'Belanja', 'Lainnya'],
    },
  });

  const [newCategory, setNewCategory] = useState('');
  const [categoryType, setCategoryType] = useState('income');

  const handleNotificationChange = (key) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key],
      },
    });
  };

  const handleSettingChange = (section, key, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [key]: value,
      },
    });
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setSettings({
        ...settings,
        categories: {
          ...settings.categories,
          [categoryType]: [...settings.categories[categoryType], newCategory.trim()],
        },
      });
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (type, category) => {
    setSettings({
      ...settings,
      categories: {
        ...settings.categories,
        [type]: settings.categories[type].filter((c) => c !== category),
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pengaturan
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              settings
            </p>
          </div>
          <Link
            to="/dashboard"
            className="mt-4 sm:mt-0 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all"
          >
            Kembali
          </Link>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h2 className="text-lg font-medium text-white mb-4">Notifikasi</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-400">Email Notifikasi</label>
                <button
                  onClick={() => handleNotificationChange('email')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.email ? 'bg-primary' : 'bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.email ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-400">Push Notifikasi</label>
                <button
                  onClick={() => handleNotificationChange('push')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.push ? 'bg-primary' : 'bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.push ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-400">Laporan Mingguan</label>
                <button
                  onClick={() => handleNotificationChange('weekly')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.weekly ? 'bg-primary' : 'bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.weekly ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-gray-400">Laporan Bulanan</label>
                <button
                  onClick={() => handleNotificationChange('monthly')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.notifications.monthly ? 'bg-primary' : 'bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.notifications.monthly ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* General Settings */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h2 className="text-lg font-medium text-white mb-4">Pengaturan Umum</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Mata Uang
                </label>
                <select
                  value={settings.currency}
                  onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                >
                  <option value="IDR">Rupiah (IDR)</option>
                  <option value="USD">US Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Bahasa
                </label>
                <select
                  value={settings.language}
                  onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                >
                  <option value="id">Bahasa Indonesia</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Tema
                </label>
                <select
                  value={settings.theme}
                  onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
            </div>
          </div>

          {/* Budget Settings */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h2 className="text-lg font-medium text-white mb-4">Pengaturan Anggaran</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Hari Mulai Bulan
                </label>
                <input
                  type="number"
                  min="1"
                  max="28"
                  value={settings.budget.startDay}
                  onChange={(e) => handleSettingChange('budget', 'startDay', parseInt(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Pendapatan Bulanan
                </label>
                <input
                  type="number"
                  value={settings.budget.monthlyIncome}
                  onChange={(e) => handleSettingChange('budget', 'monthlyIncome', parseInt(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Target Tabungan (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={settings.budget.savingsGoal}
                  onChange={(e) => handleSettingChange('budget', 'savingsGoal', parseInt(e.target.value))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Category Management */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h2 className="text-lg font-medium text-white mb-4">Manajemen Kategori</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <select
                  value={categoryType}
                  onChange={(e) => setCategoryType(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                >
                  <option value="income">Pemasukan</option>
                  <option value="expense">Pengeluaran</option>
                </select>
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Tambah kategori baru"
                    className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    onClick={handleAddCategory}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all"
                  >
                    Tambah
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Kategori Pemasukan</h3>
                  <div className="space-y-2">
                    {settings.categories.income.map((category) => (
                      <div
                        key={category}
                        className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2"
                      >
                        <span className="text-white">{category}</span>
                        <button
                          onClick={() => handleRemoveCategory('income', category)}
                          className="text-red-400 hover:text-red-300"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Kategori Pengeluaran</h3>
                  <div className="space-y-2">
                    {settings.categories.expense.map((category) => (
                      <div
                        key={category}
                        className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2"
                      >
                        <span className="text-white">{category}</span>
                        <button
                          onClick={() => handleRemoveCategory('expense', category)}
                          className="text-red-400 hover:text-red-300"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings; 