import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  baseURL: process.env.LLAMA_BASE_URL,
  apiKey: 'llama-cpp-does-not-need-a-key',
});

const TUTOR_PROMPTS = {
  math: "You are an expert Math tutor. Guide the student step-by-step without just giving the final answer.",
  history: "You are a History tutor. Focus on causes, effects, and the narrative of human events.",
  science: "You are a Science tutor. Explain concepts using the scientific method and real-world physics.",
  english: "You are an English tutor. Help the user with grammar, syntax, and critical literary analysis.",
  coding: "You are a Computer Science tutor. Help the student debug code by explaining the logic errors."
};

export async function POST(req: Request) {
  try {
    const { messages, subject } = await req.json();
    const systemPrompt = TUTOR_PROMPTS[subject as keyof typeof TUTOR_PROMPTS] || "You are a helpful tutor.";

    const response = await openai.chat.completions.create({
      model: 'local-model',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error: any) {
    console.error("Llama.cpp connection error:", error);
    // Expose the real error message to the frontend for debugging
    return NextResponse.json(
      { error: `Debug Error: ${error.message || JSON.stringify(error)}` }, 
      { status: 500 }
    );
  }
}
