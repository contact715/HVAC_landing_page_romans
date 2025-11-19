import { GoogleGenAI } from "@google/genai";

// Initialize the client only if the key is present to avoid runtime errors on empty env
const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateHvacAdvice = async (query: string): Promise<string> => {
  if (!ai) {
    console.warn("Gemini API Key not found.");
    return "Please configure your API key to use the AI assistant.";
  }

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful HVAC expert assistant. Answer the following homeowner question concisely and professionally: ${query}`,
    });
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error generating HVAC advice:", error);
    return "Sorry, I am having trouble connecting to the service.";
  }
};