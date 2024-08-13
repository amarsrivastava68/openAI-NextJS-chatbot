"use client";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from "react";
import BotMessage from "./ui/bot-message";
import UserMessage from "./ui/user-message";
export default function Chatbot() {
  const [showchat, setshowchat] = useState(false);
  return (
    <>
      <TbMessageChatbot
        size={64}
        onClick={()=>setshowchat(!showchat)}
        className="fixed right-[calc(2rem)] bottom-[calc(1rem)] hover:cursor-pointer"
      />
      {showchat && (
        <div className="fixed right-[calc(2rem)] border-t-2  rounded-lg hover:cursor-pointer p-5 shadow-sm shadow-black transition ease-out h-[474px] w-[300px] md:w-[500px] bottom-[calc(6rem)]">
          <div className="flex flex-col h-full">
            <div className="border-b-2 border rounded-lg border-b-black  p-2">
              <h1 className="text-orange-500 font-semibold">
                Flowbite Assistant
              </h1>
              <h3 className="text-sm font-semibold">Powered by OpenAI</h3>
              <p className="text-xs">
                Ask your doubts and queries regarding our platform , get
                personalized information{" "}
              </p>
              
            </div>
            <div className="p-2 flex flex-col flex-1 items-center  overflow-y-auto">Messages</div>
            {/* chat input  */}
            <BotMessage/>
            <UserMessage/>
          </div>
        </div>
      )}
    </>
  );
}
