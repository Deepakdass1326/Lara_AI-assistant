import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDgWAZedFGSK6Q3S32F9UXudmxmtL8SkJk";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 50,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response?.text() || "Sorry, I couldn't process your request.";
  } catch (error) {
    return "An error occurred while processing your request.";
  }
}

export default run;
