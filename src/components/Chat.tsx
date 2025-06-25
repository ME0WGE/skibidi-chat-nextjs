"use client";
import React, { useEffect, useState } from "react";

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

    // On n'envoie que content et sender, l'API gère id et timestamp
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
    fetchMessages(); // Rafraîchir immédiatement après envoi
  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            <strong>{msg.sender}:</strong> {msg.content}
            <span style={{ color: "#888", marginLeft: 8, fontSize: 12 }}>
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
