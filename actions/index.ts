'use server';
import OpenAI from "openai";
import { Message } from  '../app/components/Chatbot/chatbot'
import fs from 'fs'
import path from 'path'


const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
type FAQ = {
    question:string , 
    answer : string
}
const filePath = path.resolve(process.cwd() , 'data' , 'faqs.json')
const faqs: FAQ[] = JSON.parse(fs.readFileSync (filePath , 'utf-8')).faqs
console.log(faqs)
export default async function chatCompletion(chatMessages: Message[]) {
   try {
    console.log('FROM BACKEND', chatMessages);
    
    const faqAnswer = faqs.find(faq => chatMessages.at(-1)?.content.toLowerCase().includes(faq.answer.toLowerCase()))
    const chat = [
        {role: 'system' as const, content: 'You are a helpful assistant'},
        ...chatMessages
    ];

    const completion = await openAI.chat.completions.create({
        messages: chat,
        model: 'gpt-3.5-turbo'
    });

    console.log('COMPLETION', completion.choices[0]);
    return completion; 
   } catch (error) {
    console.log(error  )
   }
}