import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy data untuk demo
const monthlyData = {
  currentMonth: {
    income: 8000000,
    expenses: 5000000,
    savings: 3000000,
    categories: {
      income: [
        { category: 'Gaji', amount: 7000000 },
        { category: 'Bonus', amount: 1000000 },
      ],
      expenses: [
        { category: 'Sewa', amount: 2000000 },
        { category: 'Makan', amount: 1500000 },
        { category: 'Transport', amount: 800000 },
        { category: 'Hiburan', amount: 700000 },
      ]
    }
  },
  previousMonths: [
    { month: 'Februari', income: 7500000, expenses: 4800000 },
    { month: 'Januari', income: 7000000, expenses: 4500000 },
    { month: 'Desember', income: 8500000, expenses: 5200000 },
  ]
};

function MonthlyReport() {
  const [selectedMonth, setSelectedMonth] = useState('Maret 2024');

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Calculate percentages for progress bars
  const calculatePercentage = (amount, total) => {
    return (amount / total) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Laporan Bulanan
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Analisis keuangan Anda bulan ini
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option>Maret 2024</option>
              <option>Februari 2024</option>
              <option>Januari 2024</option>
            </select>
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Kembali
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Total Pemasukan</h3>
            <p className="text-2xl font-bold text-white">{formatCurrency(monthlyData.currentMonth.income)}</p>
            <div className="mt-2 flex items-center text-green-400">
              <span className="text-sm">+5% dari bulan lalu</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Total Pengeluaran</h3>
            <p className="text-2xl font-bold text-white">{formatCurrency(monthlyData.currentMonth.expenses)}</p>
            <div className="mt-2 flex items-center text-red-400">
              <span className="text-sm">+3% dari bulan lalu</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Total Tabungan</h3>
            <p className="text-2xl font-bold text-white">{formatCurrency(monthlyData.currentMonth.savings)}</p>
            <div className="mt-2 flex items-center text-blue-400">
              <span className="text-sm">37.5% dari pemasukan</span>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Income Categories */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg font-medium text-white mb-4">Rincian Pemasukan</h3>
            <div className="space-y-4">
              {monthlyData.currentMonth.categories.income.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{item.category}</span>
                    <span className="text-white">{formatCurrency(item.amount)}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                      style={{ width: `${calculatePercentage(item.amount, monthlyData.currentMonth.income)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expense Categories */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg font-medium text-white mb-4">Rincian Pengeluaran</h3>
            <div className="space-y-4">
              {monthlyData.currentMonth.categories.expenses.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{item.category}</span>
                    <span className="text-white">{formatCurrency(item.amount)}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                      style={{ width: `${calculatePercentage(item.amount, monthlyData.currentMonth.expenses)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Comparison */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
          <h3 className="text-lg font-medium text-white mb-4">Perbandingan 3 Bulan Terakhir</h3>
          <div className="space-y-6">
            {monthlyData.previousMonths.map((month, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">{month.month}</span>
                  <div className="flex gap-4">
                    <span className="text-green-400">{formatCurrency(month.income)}</span>
                    <span className="text-red-400">{formatCurrency(month.expenses)}</span>
                  </div>
                </div>
                <div className="relative h-4 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                    style={{ width: `${calculatePercentage(month.income, monthlyData.currentMonth.income)}%` }}
                  ></div>
                  <div
                    className="absolute right-0 h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                    style={{ width: `${calculatePercentage(month.expenses, monthlyData.currentMonth.income)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyReport; 