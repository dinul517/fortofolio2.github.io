import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderAnimation from './HeaderAnimation';
import AddTransaction from './AddTransaction';

// Dummy data untuk demo
const dummyData = {
  balance: 15000000,
  income: 8000000,
  expenses: 5000000,
  transactions: [
    { id: 1, type: 'income', category: 'Gaji', amount: 8000000, date: '2024-03-01' },
    { id: 2, type: 'expense', category: 'Sewa', amount: 2000000, date: '2024-03-02' },
    { id: 3, type: 'expense', category: 'Makan', amount: 1500000, date: '2024-03-03' },
    { id: 4, type: 'expense', category: 'Transport', amount: 1500000, date: '2024-03-04' },
  ]
};

function Dashboard() {
  const navigate = useNavigate();
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [transactions, setTransactions] = useState(dummyData.transactions);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Update waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fungsi untuk menangani klik tombol
  const handleAddTransaction = (newTransaction) => {
    const transaction = {
      id: transactions.length + 1,
      ...newTransaction
    };
    setTransactions([transaction, ...transactions]);
  };

  const handleMonthlyReport = () => {
    // Implementasi untuk menampilkan laporan bulanan
    navigate('/report');
  };

  const handleSetTarget = () => {
    // Implementasi untuk mengatur target
    navigate('/target');
  };

  const handleSettings = () => {
    // Implementasi untuk pengaturan
    navigate('/settings');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-gray-900 to-black relative">
      {/* Animasi Header */}
      <HeaderAnimation />
      
      {/* Header dengan efek glass morphism */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                  FinanceManager
                </h1>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-xs sm:text-sm bg-gradient-to-r from-green-400 to-blue-500 px-2 py-0.5 rounded-full animate-bounce">
                  Live
                </div>
              </div>
              <div className="text-gray-400 text-sm sm:hidden">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">
              <div className="hidden sm:block text-gray-400 text-sm mr-4">
                {currentTime.toLocaleTimeString()}
              </div>
              <Link to="/login" className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-all duration-300 text-white font-semibold hover:scale-105 text-center text-sm sm:text-base">
                Login
              </Link>
              <Link to="/register" className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-white font-semibold hover:scale-105 text-center text-sm sm:text-base">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content dengan animasi fade-in */}
      <div className="container py-8 animate-fade-in">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Grid */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(transparent 1px, transparent 1px), linear-gradient(90deg, transparent 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              animation: 'grid-move 20s linear infinite',
              opacity: '0.1'
            }}></div>
          </div>

          {/* Futuristic Charts */}
          <div className="hidden sm:block absolute top-20 right-10 w-64 h-64 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-lg transform rotate-45 animate-pulse"></div>
            <div className="absolute inset-4 border-2 border-white/20 rounded-lg transform -rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-primary/50 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* Data Flow Lines */}
          <div className="hidden sm:block absolute top-40 left-10 w-32 h-96">
            <div className="absolute h-full w-1 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0">
              <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-primary/40 to-transparent animate-flow"></div>
            </div>
            <div className="absolute h-full w-1 left-8 bg-gradient-to-b from-secondary/0 via-secondary/20 to-secondary/0">
              <div className="absolute top-1/3 w-full h-20 bg-gradient-to-b from-secondary/40 to-transparent animate-flow delay-200"></div>
            </div>
            <div className="absolute h-full w-1 left-16 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0">
              <div className="absolute top-2/3 w-full h-20 bg-gradient-to-b from-primary/40 to-transparent animate-flow delay-400"></div>
            </div>
          </div>

          {/* Hexagon Pattern */}
          <div className="hidden sm:block absolute bottom-20 right-20 w-96 h-96 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary clip-hexagon animate-rotate-slow"></div>
            <div className="absolute inset-8 bg-dark clip-hexagon"></div>
            <div className="absolute inset-16 bg-gradient-to-bl from-primary to-secondary clip-hexagon animate-rotate-slow-reverse"></div>
          </div>
        </div>

        {/* Welcome Message dengan animasi typing */}
        <div className="text-center mb-8 sm:mb-12 relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-gradient px-4">
            Selamat Datang di FinanceManager
          </h2>
          <p className="text-gray-400 animate-fade-in-up text-sm sm:text-base">
            aplikasi yang membantu mengelola keuangan Anda dengan lebih bijak
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-xs sm:text-sm font-medium">Saldo</h3>
            <p className="text-xl sm:text-2xl font-bold text-white mt-1 sm:mt-2">{formatCurrency(dummyData.balance)}</p>
            <div className="mt-2 flex items-center text-green-400">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm">+2.5%</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-xs sm:text-sm font-medium">Pemasukan</h3>
            <p className="text-xl sm:text-2xl font-bold text-white mt-1 sm:mt-2">{formatCurrency(dummyData.income)}</p>
            <div className="mt-2 flex items-center text-green-400">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm">+12.5%</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-gray-400 text-xs sm:text-sm font-medium">Pengeluaran</h3>
            <p className="text-xl sm:text-2xl font-bold text-white mt-1 sm:mt-2">{formatCurrency(dummyData.expenses)}</p>
            <div className="mt-2 flex items-center text-red-400">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm">-8.3%</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-white/20 mb-6 sm:mb-8 overflow-x-auto">
          <nav className="-mb-px flex space-x-4 sm:space-x-8 min-w-max px-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('transactions')}
              className={`${
                activeTab === 'transactions'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Transaksi
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`${
                activeTab === 'budget'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Budget
            </button>
            <button
              onClick={() => setActiveTab('goals')}
              className={`${
                activeTab === 'goals'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Target
            </button>
          </nav>
        </div>

        {/* Transactions Table */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden">
          <div className="px-4 py-3 sm:px-6 sm:py-5 border-b border-white/20">
            <h3 className="text-base sm:text-lg font-medium text-white">Transaksi Terbaru</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/20">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Jumlah
                  </th>
                  <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Tipe
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/20">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-white/5">
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-300">
                      {new Date(transaction.date).toLocaleDateString('id-ID')}
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-300">
                      {transaction.category}
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-300">
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                      <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.type === 'income'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions dengan animasi hover yang lebih menarik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <button 
            onClick={() => setShowAddTransaction(true)}
            className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-primary/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <span className="text-xl sm:text-2xl animate-bounce">+</span>
              <span className="text-sm sm:text-base">Tambah Transaksi</span>
            </span>
          </button>
          <button 
            onClick={handleMonthlyReport}
            className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-green-400 to-secondary hover:from-secondary hover:to-green-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-secondary/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <span className="text-xl sm:text-2xl animate-pulse">📊</span>
              <span className="text-sm sm:text-base">Laporan Bulanan</span>
            </span>
          </button>
          <button 
            onClick={handleSetTarget}
            className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-blue-500/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <span className="text-xl sm:text-2xl animate-bounce">🎯</span>
              <span className="text-sm sm:text-base">Atur Target</span>
            </span>
          </button>
          <button 
            onClick={handleSettings}
            className="transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-800 hover:to-gray-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-gray-500/50 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <span className="text-xl sm:text-2xl animate-spin-slow">⚙️</span>
              <span className="text-sm sm:text-base">Pengaturan</span>
            </span>
          </button>
        </div>

        {/* Add Transaction Modal */}
        <AddTransaction
          isOpen={showAddTransaction}
          onClose={() => setShowAddTransaction(false)}
          onAdd={handleAddTransaction}
        />
      </div>

      {/* Add necessary styles to the head */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(30px); }
        }

        @keyframes flow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }

        .animate-flow {
          animation: flow 3s linear infinite;
        }

        .animate-rotate-slow {
          animation: rotate 20s linear infinite;
        }

        .animate-rotate-slow-reverse {
          animation: rotate 15s linear infinite reverse;
        }

        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 5s linear infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
