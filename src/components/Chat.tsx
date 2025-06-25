"use client";
import React, { useEffect, useRef, useState } from "react";

// Adapter le type Message pour matcher l'API
type Message = {
  id: number;
  content: string;
  sender: string;
  timestamp: string;
};

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // Fetch messages from API
  const fetchMessages = async () => {
    const response = await fetch("/api/messages");
    const data = await response.json();
    setMessages(data);
  };

  // Polling: refresh messages every 2 seconds
  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000); // 2s
    return () => clearInterval(interval);
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: input,
        sender: "User",
      }),
    });

    setInput("");
    fetchMessages();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-violet-900 to-indigo-950 text-gray-100 flex-1 w-full">
      <div className="w-full max-w-lg bg-gray-950/90 border border-violet-900 rounded-xl shadow-2xl p-0 flex flex-col h-full">
        <div className="bg-gradient-to-r from-violet-800 via-indigo-900 to-gray-900 rounded-t-xl px-6 py-4 flex items-center border-b border-violet-900">
          <span className="text-2xl font-mono font-bold text-violet-300 tracking-wide drop-shadow">
            # skibidi-chatge
          </span>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2 scrollbar-thin scrollbar-thumb-violet-700 scrollbar-track-gray-900 max-h-[50vh]">
          {messages.length === 0 && (
            <div className="text-gray-500 text-center py-8">
              &lt;LoveYourself /&gt;
            </div>
          )}
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-end group">
              <span className="font-mono text-sm font-bold text-violet-400 mr-2">
                {msg.sender}
              </span>
              <span className="text-gray-300">{msg.content}</span>
              <span className="ml-auto text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form
          onSubmit={sendMessage}
          className="w-full flex gap-2 px-6 py-4 bg-gray-950/80 rounded-b-xl border-t border-violet-900">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message…"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-violet-200 placeholder-violet-400 border border-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-600 font-mono"
            autoComplete="off"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-violet-700 hover:bg-violet-800 text-white font-semibold font-mono shadow transition">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
