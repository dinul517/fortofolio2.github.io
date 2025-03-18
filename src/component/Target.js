import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy data untuk demo
const targetData = {
  savings: {
    current: 15000000,
    target: 50000000,
    deadline: '2024-12-31',
  },
  expenses: {
    current: 5000000,
    target: 4000000,
    deadline: '2024-06-30',
  },
  targets: [
    {
      id: 1,
      name: 'Beli Rumah',
      amount: 500000000,
      saved: 100000000,
      deadline: '2025-12-31',
      category: 'Properti'
    },
    {
      id: 2,
      name: 'Liburan',
      amount: 25000000,
      saved: 15000000,
      deadline: '2024-08-31',
      category: 'Hiburan'
    }
  ]
};

function Target() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTarget, setNewTarget] = useState({
    name: '',
    amount: '',
    deadline: '',
    category: ''
  });

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate progress percentage
  const calculateProgress = (current, target) => {
    return (current / target) * 100;
  };

  // Calculate remaining days
  const calculateRemainingDays = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = Math.abs(deadlineDate - today);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleAddTarget = (e) => {
    e.preventDefault();
    // Implementasi penambahan target baru
    setShowAddModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Target Keuangan
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Atur dan pantau target keuangan Anda
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all"
            >
              + Tambah Target
            </button>
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Kembali
            </Link>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {/* Savings Target */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Target Tabungan</h3>
            <div className="flex justify-between items-end mb-4">
              <p className="text-2xl font-bold text-white">{formatCurrency(targetData.savings.current)}</p>
              <p className="text-gray-400">dari {formatCurrency(targetData.savings.target)}</p>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                style={{ width: `${calculateProgress(targetData.savings.current, targetData.savings.target)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">
              {calculateRemainingDays(targetData.savings.deadline)} hari tersisa
            </p>
          </div>

          {/* Expense Target */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Target Pengeluaran Bulanan</h3>
            <div className="flex justify-between items-end mb-4">
              <p className="text-2xl font-bold text-white">{formatCurrency(targetData.expenses.current)}</p>
              <p className="text-gray-400">target {formatCurrency(targetData.expenses.target)}</p>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                style={{ width: `${calculateProgress(targetData.expenses.current, targetData.expenses.target)}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">
              {calculateRemainingDays(targetData.expenses.deadline)} hari tersisa
            </p>
          </div>
        </div>

        {/* Target List */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <div className="p-4 sm:p-6 border-b border-white/20">
            <h3 className="text-lg font-medium text-white">Daftar Target</h3>
          </div>
          <div className="divide-y divide-white/20">
            {targetData.targets.map((target) => (
              <div key={target.id} className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">{target.name}</h4>
                    <p className="text-sm text-gray-400">{target.category}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 text-right">
                    <p className="text-white font-medium">{formatCurrency(target.saved)}</p>
                    <p className="text-sm text-gray-400">dari {formatCurrency(target.amount)}</p>
                  </div>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${calculateProgress(target.saved, target.amount)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">
                    {calculateProgress(target.saved, target.amount).toFixed(1)}% tercapai
                  </span>
                  <span className="text-gray-400">
                    {calculateRemainingDays(target.deadline)} hari tersisa
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Target Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 w-full max-w-md">
              <h3 className="text-xl font-medium text-white mb-4">Tambah Target Baru</h3>
              <form onSubmit={handleAddTarget}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Nama Target
                    </label>
                    <input
                      type="text"
                      value={newTarget.name}
                      onChange={(e) => setNewTarget({ ...newTarget, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Jumlah Target
                    </label>
                    <input
                      type="number"
                      value={newTarget.amount}
                      onChange={(e) => setNewTarget({ ...newTarget, amount: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Tenggat Waktu
                    </label>
                    <input
                      type="date"
                      value={newTarget.deadline}
                      onChange={(e) => setNewTarget({ ...newTarget, deadline: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Kategori
                    </label>
                    <select
                      value={newTarget.category}
                      onChange={(e) => setNewTarget({ ...newTarget, category: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Pilih Kategori</option>
                      <option value="Properti">Properti</option>
                      <option value="Kendaraan">Kendaraan</option>
                      <option value="Pendidikan">Pendidikan</option>
                      <option value="Hiburan">Hiburan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Target; 