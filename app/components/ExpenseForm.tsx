export default function ExpenseForm({ onAdd }: { onAdd: any }) {
  return (
    <form onSubmit={onAdd} className="bg-gray-50 p-4 rounded-lg mb-8 shadow-sm flex gap-2 border border-gray-200">
      <input name="title" placeholder="Harcama adı" className="border p-2 rounded flex-1" required />
      <input name="amount" type="number" placeholder="TL" className="border p-2 rounded w-24" required />
      <select name="category" className="border p-2 rounded">
        <option>Gıda</option>
        <option>Ulaşım</option>
        <option>Eğlence</option>
         <option>Giyim</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Ekle</button>
    </form>
  );
}
