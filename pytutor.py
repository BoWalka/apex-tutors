#!/usr/bin/env python3


import os
import subprocess

def run_cmd(cmd):
    print(f"Running: {cmd}")
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    print(res.stdout)
    if res.stderr:
        print(res.stderr)
    return res.returncode == 0

print("[*] Checking environment directories...")
os.makedirs("src/components", exist_ok=True)
os.makedirs("src/app/api/chat", exist_ok=True)

tutor_chat_code = '''"use client";
import { useState, useRef, useEffect } from "react";

const SUBJECTS = [
  { id: "math", name: "🔢 Math" },
  { id: "history", name: "📜 History" },
  { id: "science", name: "🔬 Science" },
  { id: "english", name: "📚 English" },
  { id: "coding", name: "💻 Coding" }
];

export default function TutorChat() {
  const [activeSubject, setActiveSubject] = useState("math");
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, subject: activeSubject }),
      });

      if (!res.ok) throw new Error("Failed to connect");
      const data = await res.json();
      
      setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ The local AI engine is currently offline." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto my-16 p-6 bg-white shadow-xl rounded-2xl border border-orange-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-950">Ask Our AI Tutors</h2>
      
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {SUBJECTS.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setActiveSubject(sub.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeSubject === sub.id 
                ? "bg-orange-500 text-white" 
                : "bg-orange-50 text-orange-800 hover:bg-orange-100"
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      <div className="bg-slate-50 rounded-xl p-4 h-96 overflow-y-auto mb-4 border border-slate-200">
        {messages.length === 0 ? (
          <p className="text-center text-slate-400 mt-32">Select a subject and say hello to begin.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === "user" 
                  ? "bg-orange-500 text-white rounded-br-none" 
                  : "bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm"
              }`}>
                {msg.content}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white border border-slate-200 text-slate-500 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </section>
  );
}
'''

with open("src/components/TutorChat.tsx", "w", encoding="utf-8") as f:
    f.write(tutor_chat_code)
print("[+] Written src/components/TutorChat.tsx")

page_path = "src/app/page.tsx"
if os.path.exists(page_path):
    with open(page_path, "r", encoding="utf-8") as f:
        content = f.read()
    if "TutorChat" not in content:
        content = 'import TutorChat from "@/components/TutorChat";\n' + content
        if "<ContactForm />" in content:
            content = content.replace("<ContactForm />", "<TutorChat />\n      <ContactForm />")
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("[+] Updated src/app/page.tsx")

run_cmd("git add -f src/components/TutorChat.tsx src/app/page.tsx")
run_cmd("git commit -m 'Force track TutorChat component'")
run_cmd("git push origin main")
print("[+] Finished! Check Vercel dashboard.")
