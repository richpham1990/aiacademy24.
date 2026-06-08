import { ArrowUpRight, Wallet } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="bg-black min-h-screen text-white p-6 font-sans">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold italic tracking-tighter">
          AIAECADUMY<span className="text-[#F3BA2F]">24.ASIA</span>
        </h1>
        <button className="flex items-center gap-2 bg-[#111111] border border-[#222] px-4 py-2 rounded-full text-xs hover:border-[#F3BA2F] transition-colors">
          <Wallet size={14} /> Kết nối ví
        </button>
      </header>

      <section className="bg-[#111111] border border-[#222] p-8 rounded-3xl mb-6 shadow-2xl">
        <p className="text-[10px] uppercase text-gray-500 font-bold mb-2">Tổng thu nhập ASN</p>
        <h2 className="text-5xl font-black mb-6">24,850.5 <span className="text-[#F3BA2F]">ASN</span></h2>
        <button className="w-full bg-[#F3BA2F] text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform flex justify-center items-center gap-2">
          RÚT LỢI NHUẬN <ArrowUpRight size={18} />
        </button>
      </section>
    </main>
  );
}
