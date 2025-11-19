import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHvacAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful HVAC expert assistant. Answer the following homeowner question concisely and professionally: ${query}`,
    });
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error generating HVAC advice:", error);
    return "Sorry, I am having trouble connecting to the service.";
  }
};