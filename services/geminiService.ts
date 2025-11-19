import { GoogleGenAI } from "@google/genai";

// Declare process to ensure TypeScript recognizes process.env.API_KEY
declare const process: { env: { API_KEY: string } };

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHvacAdvice = async (query: string): Promise<string> => {
  try {
    // Ensure we don't make empty requests
    if (!query.trim()) return "";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful HVAC expert assistant for Roman's Service. Answer the following homeowner question concisely and professionally. Use plain English. If the question is about pricing, say "Pricing depends on the specific unit and home size, please call (941) 208-2008 for a free estimate." Question: ${query}`,
    });
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error generating HVAC advice:", error);
    return "Sorry, I am having trouble connecting to the service. Please call us directly at (941) 208-2008.";
  }
};