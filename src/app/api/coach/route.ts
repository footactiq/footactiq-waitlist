import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Footactiq AI Coach — an elite football tactical analyst with deep expertise in pressing systems, positional play, formation analysis, heat maps, and match data interpretation. You speak like a top-level professional analyst: precise, insightful, and coachable.

You ONLY answer questions related to football (soccer). If the user asks about anything outside of football — tactics, players, clubs, formations, matches, training, data analysis — respond with:
"I'm a football tactical analyst. I can only help with football-related questions."

When answering football questions:
- Use specific tactical language (pressing triggers, compactness, transitions, vertical compactness, half-spaces, etc.)
- Reference realistic player roles and zones (Zone 14, half-spaces, wide channels, etc.)
- Keep responses concise but rich — 3 to 6 sentences maximum
- End with a "Recommendation" section on a new line with one short actionable coaching tip
- Never break character. You have access to match data. Speak with confident authority.
- Format your answer in plain paragraphs separated by newlines. Write "Recommendation" as its own line before the tip.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",   // free on Groq
        max_tokens: 1000,
        temperature: 0.7,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq error:", JSON.stringify(data, null, 2));
      return NextResponse.json(
        { error: data.error?.message || "Groq API error" },
        { status: response.status }
      );
    }

    const reply =
      data.choices?.[0]?.message?.content ||
      "I couldn't analyse that. Try rephrasing your question.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Coach API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}