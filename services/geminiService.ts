import { GoogleGenAI } from "@google/genai";

// Safely retrieve API key to prevent "process is not defined" crash in Vite/Browser
// This ensures the app loads even if the environment variable isn't fully configured yet.
const getApiKey = () => {
  try {
    if (typeof process !== "undefined" && process.env) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // ignore reference errors
  }
  return "";
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

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