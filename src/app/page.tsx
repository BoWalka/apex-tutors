import TutorChat from "@/components/TutorChat";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-slate-50">
      <div className="text-center mb-6">
        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
          🧪 Testing Mode Active
        </span>
      </div>
      <TutorChat />
    </main>
  );
}
