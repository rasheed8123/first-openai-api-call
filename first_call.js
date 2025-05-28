const readline = require("readline");
require("dotenv").config();
const OpenAI = require("openai");

// Setup OpenAI with API key from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Setup readline to get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fixed system prompt
const systemPrompt = {
  role: "system",
  content: "You are a helpful assistant.",
};

rl.question("Enter your prompt: ", async (userInput) => {
  try {
    const messages = [
      systemPrompt,
      { role: "user", content: userInput },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    console.log("\nAssistant reply:\n", response.choices[0].message.content);
    console.log("\nToken usage:", response.usage);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    rl.close();
  }
});
