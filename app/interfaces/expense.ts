export interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: "income" | "expense"; // Hatanın ana çözümü bu satır
}