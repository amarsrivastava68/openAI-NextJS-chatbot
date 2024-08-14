"use client";
import { TbMessageChatbot } from "react-icons/tb";
import { FormEvent, useState } from "react";
import BotMessage from "./ui/bot-message";
import UserMessage from "./ui/user-message";
import ChatInput from "./ui/chat-input";
import { log } from "console";

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
      role: "assistant",
      content: "hi ! ask me your queries about flowbite svelte .",
    },
  ]);

  const handleSendMessage = async (e: FormEvent)=>{
        e.preventDefault()
          console.log('userMessage ' , userMessage);
          if (!userMessage) return ;
          
          const newMessage : Message = {role :'user' , content: userMessage}
          setMessages(prev => [...prev , newMessage ])
          setUserMessage('')
          setLoading(true)
          try {
            
          } catch (error) {
            
          }
  }
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
                Flowbite Assistant
              </h1>
              <h3 className="text-sm font-semibold">Powered by OpenAI</h3>
              <p className="text-xs">
                Ask your doubts and queries regarding our platform , get
                personalized information{" "}
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
