"use server";
import OpenAI from "openai";
import { Message } from "../app/components/Chatbot/chatbot";
import fs from "fs";
import path from "path";

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// FAQ Type
type FAQ = {
  question: string;
  answer: string;
};

// Reads the FAQs JSON File
const filePath = path.resolve(process.cwd(), "data", "faqs.json");
const faqs: FAQ[] = JSON.parse(fs.readFileSync(filePath, "utf-8")).faqs;
/**
 * Chat Completion
 * @param chatMessages
 * @returns
 */
export async function chatCompletion(chatMessages: Message[]) {
  try {
    // checking if the user question is in the FAQ array
    const faqsAnswer = faqs.find((faq) =>
      chatMessages
        .at(-1)
        ?.content.toLowerCase()
        .includes(faq.question.toLowerCase())
    );

    if (faqsAnswer) {
      return {
        role: "assistant" as const,
        content: faqsAnswer.answer,
      } as Message;
    }

    console.log(`Reaching out to OPENAI API...`);

    const chat = [
      { role: "system" as const, content: "You are a helpful assistant" },
      ...faqs.map((faq) => ({
        role: "system" as const,
        content: `Q: ${faq.question}\nA: ${faq.answer}`,
      })),
      ...chatMessages,
    ];

    const completion = await openAI.chat.completions.create({
      messages: chat,
      model: "gpt-3.5-turbo",
    });

    if (!completion) {
      throw new Error("Invalid response from OPENAI API!");
    }

    const assistantMessage = completion.choices[0].message?.content;

    if (!assistantMessage) {
      throw new Error("No message from OPENAI API");
    }

    console.log("COMPLETION", completion.choices[0].message.content);
    return { role: "assistant" as const, content: assistantMessage } as Message;
  } catch (error) {
    console.log(error);
    return {
      role: "assistant" as const,
      content: "I'm sorry, something went wrong. Please ty again later.",
    } as Message;
  }
}
