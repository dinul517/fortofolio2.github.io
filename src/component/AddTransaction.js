import React, { useState } from 'react';

function AddTransaction({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    type: 'expense',
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  });

  const categories = {
    income: ['Gaji', 'Bonus', 'Investasi', 'Lainnya'],
    expense: ['Makanan', 'Transport', 'Belanja', 'Hiburan', 'Tagihan', 'Lainnya']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      amount: parseFloat(formData.amount),
      date: new Date(formData.date).toISOString()
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-dark rounded-2xl w-full max-w-md border border-white/20">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Tambah Transaksi</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tipe Transaksi
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleChange({ target: { name: 'type', value: 'expense' } })}
                  className={`py-2 px-4 rounded-lg border ${
                    formData.type === 'expense'
                      ? 'bg-red-500 border-red-600 text-white'
                      : 'border-white/20 text-gray-400 hover:border-red-500 hover:text-red-500'
                  } transition-colors`}
                >
                  Pengeluaran
                </button>
                <button
                  type="button"
                  onClick={() => handleChange({ target: { name: 'type', value: 'income' } })}
                  className={`py-2 px-4 rounded-lg border ${
                    formData.type === 'income'
                      ? 'bg-green-500 border-green-600 text-white'
                      : 'border-white/20 text-gray-400 hover:border-green-500 hover:text-green-500'
                  } transition-colors`}
                >
                  Pemasukan
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Kategori
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                required
              >
                <option value="">Pilih Kategori</option>
                {categories[formData.type].map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Jumlah
              </label>
              <div className="relative">
                <span className="absolute left-4 top-2.5 text-gray-400">Rp</span>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-2.5 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tanggal
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Deskripsi (Opsional)
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2.5 text-white focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                rows="3"
                placeholder="Tambahkan catatan..."
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2.5 border border-white/20 rounded-lg text-gray-300 hover:bg-white/5 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction; 