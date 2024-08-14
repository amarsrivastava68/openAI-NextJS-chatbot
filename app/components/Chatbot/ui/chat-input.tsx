import React, { FormEvent } from "react";
type ChatProps = {
  userMessage: string;
  setUserMessage: (value: string) => void;
  handleSendMessage: (e: FormEvent) => void;
};
const ChatInput = ({
  userMessage,
  setUserMessage,
  handleSendMessage,
}: ChatProps) => {
  return (
    <div className="flex space-x-2 items-center mt-auto">
      <form  onSubmit={handleSendMessage} className="flex items-cente justify-end w-full  space-x-2">
        <input
          value={userMessage}
          onChange={(e)=> setUserMessage(e.target.value)}
          className=" w-full rounded p-1 items-center justify-center border border-[#e5e7eb] px-3 text-sm text-black h-10 "
          type="text"
          placeholder="Type your query here"
        />
        <button
          className="bg-orange-500 text-white p-2  w-auto text-sm font-medium shdow-md hover:bg-orange-600 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
