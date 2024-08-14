"use client";
import { TbMessageChatbot } from "react-icons/tb";
import { FormEvent, useState } from "react";
import BotMessage from "./ui/bot-message";
import UserMessage from "./ui/user-message";
import ChatInput from "./ui/chat-input";
import chatCompletion from '../../../actions/index'

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function Chatbot() {
  const [showchat, setShowchat] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant" as const,
      content: "hi ! ask me your queries about flowbite svelte .",
    },
  ]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();

    console.log("USER MESSAGE", userMessage);

    if (!userMessage) return;

    // Create new message object
    const newMessage: Message = { role: "user" as const, content: userMessage };
    console.log("NEW MESSAGE", newMessage);

    // Update the message state
    setMessages((prevMessage) => [...prevMessage, newMessage]);
    setLoading(true);

    // Request to OPENAI
    try {
      // copy of messages
      const chatMessages = messages.slice(1);
      console.log("CHAT MESSAGES", chatMessages);

      // Call the chat completion API
      const res = await chatCompletion([...chatMessages, newMessage]);

      console.log("RESPONSE", res);
      // Handle response
      if (res?.choices[0]?.message) {
        setUserMessage("");

        const assistantMessage: Message = {
          content: res.choices[0].message.content as string,
          role: "assistant",
        };

        setMessages(prevMessages => [...prevMessages, assistantMessage]);
      }
    } catch (error) {
      console.log("API Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <TbMessageChatbot
        size={64}
        onClick={() => setShowchat(!showchat)}
        className="fixed right-[calc(2rem)] bottom-[calc(1rem)] hover:cursor-pointer"
      />
      {showchat && (
        <div className="fixed right-[calc(2rem)] border-t-2 border-orange-500 rounded-lg hover:cursor-pointer p-5 shadow-lg  border  shadow-orange transition ease-out h-[474px] w-[300px] md:w-[500px] bottom-[calc(6rem)]">
          <div className="flex flex-col h-full">
            <div className="border-b-2 border rounded-lg border-b-black shadow-black shadow-sm  p-2">
              <h1 className="text-orange-500 font-semibold">
                Flowbite Shipping company Assistant
              </h1>
              <h3 className="text-sm font-semibold">Powered by OpenAI</h3>
              <p className="text-xs">
                Ask your doubts and queries regarding our shipping platform , get specific information .{" "}
              </p>
            </div>
            <div className="p-2 flex flex-col flex-1 items-center  overflow-y-auto">
              {messages &&
                messages.map((m, i) => {
                  return m.role === "assistant" ? (
                    <BotMessage {...m}  key={i}/>
                  ) : (
                    <UserMessage {...m} key={i} />
                  );
                })}
            </div>
            {/* chat input  */}
            <ChatInput
              userMessage={userMessage}
              setUserMessage={setUserMessage}
              handleSendMessage = {handleSendMessage}
            />
          </div>
        </div>
      )}
    </>
  );
}
