"use client";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from "react";
export default function Chatbot() {
  const [showchat, setshowchat] = useState(true);
  return (
    <>
      <TbMessageChatbot
        size={64}
        className="fixed right-[calc(2rem)] bottom-[calc(1rem)] hover:cursor-pointer"
      />
      {showchat && (
        <div className="fixed right-[calc(2rem)] hover:cursor-pointer p-5 shadow-md shadow-black  h-[474px] w-[300px] md:w-[500px] bottom-[calc(6rem)]">
          <div className="flex flex-col h-full">
            <div className="shadow-sm p-2">
              <h1 className="text-orange-500 font-semibold">Flowbite Assistant</h1>
              <h3 className="text-sm font-semibold">Powered by OpenAI</h3>
              <p className="text-xs">Ask your doubts and queries regarding our platform , get personalized information </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
