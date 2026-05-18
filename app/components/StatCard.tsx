interface StatCardProps {
  total: number;
  count: number;
}

export default function StatCard({ total, count }: StatCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-white transform hover:scale-[1.01] transition-transform">
        <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Toplam Harcama</p>
        <h2 className="text-4xl font-mono font-bold mt-1">{total.toLocaleString('tr-TR')} TL</h2>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">İşlem Sayısı</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-1">{count} Adet</h2>
      </div>
    </div>
  );
}