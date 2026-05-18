import { useState, useEffect } from "react";
import Header from "~/components/Header";
import type { Expense } from "~/interfaces/expense";

export default function ExpensePage() {
  // 1. Durum (State) Yönetimi
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Gıda");
  const [type, setType] = useState<"income" | "expense">("expense"); // Gelir/Gider tipi

  // 2. LocalStorage İşlemleri
  useEffect(() => {
    const saved = localStorage.getItem("my_expenses");
    if (saved) setExpenses(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("my_expenses", JSON.stringify(expenses));
  }, [expenses]);

  // 3. MANTIK: Hesaplamalar (Filter & Reduce)
  const totalIncome = expenses
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = expenses
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  // 4. İŞLEMLER: Ekleme, Silme, Güncelleme
  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;
    
    const newExp: Expense = { 
      id: Date.now(), 
      title, 
      amount: Number(amount), 
      category, 
      type // Veriye gelir mi gider mi olduğunu ekliyoruz
    };
    
    setExpenses([...expenses, newExp]);
    setTitle(""); 
    setAmount("");
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const updateExpense = (id: number) => {
    setExpenses(expenses.map(exp => 
      exp.id === id ? { ...exp, amount: Math.round(exp.amount * 1.1) } : exp
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <Header />

        {/* --- YENİ DASHBOARD (3'lü Kart Yapısı) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-600 p-5 rounded-2xl text-white shadow-lg transform hover:scale-[1.02] transition-all">
            <p className="text-[10px] opacity-80 uppercase font-black tracking-widest">Gelir (+)</p>
            <h2 className="text-2xl font-mono font-bold">{totalIncome.toLocaleString()} TL</h2>
          </div>
          <div className="bg-red-600 p-5 rounded-2xl text-white shadow-lg transform hover:scale-[1.02] transition-all">
            <p className="text-[10px] opacity-80 uppercase font-black tracking-widest">Gider (-)</p>
            <h2 className="text-2xl font-mono font-bold">{totalExpense.toLocaleString()} TL</h2>
          </div>
          <div className="bg-gray-900 p-5 rounded-2xl text-white shadow-lg border-b-4 border-blue-500 transform hover:scale-[1.02] transition-all">
            <p className="text-[10px] opacity-80 uppercase font-black tracking-widest">Net Bakiye</p>
            <h2 className="text-2xl font-mono font-bold">{balance.toLocaleString()} TL</h2>
          </div>
        </div>

        {/* GÜNCEL EKLEME FORMU */}
        <form onSubmit={addExpense} className="bg-white p-6 rounded-2xl shadow-sm mb-8 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input 
            placeholder="İşlem adı (Örn: Maaş, Kira)" value={title} onChange={(e) => setTitle(e.target.value)}
            className="border-gray-200 border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold placeholder:text-gray-400" required 
          />
          <input 
            type="number" placeholder="Tutar" value={amount} onChange={(e) => setAmount(e.target.value)}
            className="border-gray-200 border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold" required 
          />
          <div className="flex gap-2 col-span-1 md:col-span-2">
            <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")} className="border-gray-200 border p-3 rounded-xl bg-gray-50 text-black font-bold flex-1">
              <option value="expense">Gider Listesine Ekle</option>
              <option value="income">Gelir Listesine Ekle</option>
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="border-gray-200 border p-3 rounded-xl bg-gray-50 text-black font-bold flex-1">
              <option>Gıda</option><option>Ulaşım</option><option>Eğlence</option><option>Ev</option><option>Maaş</option>
            </select>
          </div>
          <button className="col-span-1 md:col-span-2 bg-blue-600 text-white p-4 rounded-xl font-black hover:bg-blue-700 shadow-md transition-all uppercase tracking-widest">
            Listeye Kaydet
          </button>
        </form>

        {/* GÜNCEL LİSTELEME */}
        <div className="space-y-3">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">İşlem Geçmişi</h3>
          {expenses.map(exp => (
            <div key={exp.id} className={`flex justify-between items-center p-4 bg-white rounded-2xl border-l-8 shadow-sm ${exp.type === 'income' ? 'border-green-500' : 'border-red-500'}`}>
              <div>
                <p className="font-black text-black text-lg leading-tight">{exp.title}</p>
                <div className="flex gap-2 mt-1">
                  <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500 uppercase">{exp.category}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${exp.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {exp.type === 'income' ? 'Gelir' : 'Gider'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`font-mono font-black text-xl ${exp.type === 'income' ? 'text-green-600' : 'text-black'}`}>
                  {exp.type === 'income' ? '+' : '-'}{exp.amount} TL
                </span>
                <div className="flex gap-1">
                  <button type="button" onClick={() => updateExpense(exp.id)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-blue-50">
                    <span className="text-[10px] font-bold">+%10</span>
                  </button>
                  <button type="button" onClick={() => deleteExpense(exp.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-red-50">
                    <span className="text-[10px] font-bold">SİL</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          {expenses.length === 0 && (
            <p className="text-center py-10 text-gray-400 font-bold italic">Kayıtlı işlem bulunamadı.</p>
          )}
        </div>
      </div>
    </div>
  );
}