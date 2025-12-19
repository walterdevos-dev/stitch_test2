
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function generateStationDescription(name: string, genre: string): Promise<string> {
  if (!process.env.API_KEY) return "Station description could not be generated at this time.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a compelling, short marketing description (max 300 characters) for a radio station named "${name}" that focuses on the genre "${genre}". Make it sound professional and inviting for potential listeners.`,
    });
    return response.text || "No description generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating AI description.";
  }
}
