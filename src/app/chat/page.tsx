'use client';

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: userInput,
      sender: "user",
    };
    setMessages([...messages, userMessage]);

    setUserInput("");

    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: "This is a bot response!",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="flex flex-col bg-[#e1dfe8] text-[#17364c] px-10">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <div className="p-4 bg-white border raounded fixed bottom-0">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded px-3 py-2"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <button
            onClick={handleSend}
            className="bg-[#a3dbdb] text-[#17364c] py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ text, sender }: { text: string; sender: string }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex mb-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`rounded-md px-3 py-2 max-w-xs ${
          isUser
            ? "bg-[#a3dbdb] text-[#17364c] rounded-br-none"
            : "bg-gray-300 text-black rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
