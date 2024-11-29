import React, { useState } from "react";
import "../assets/css/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Halo! Selamat datang di TeraLab Asisten. Siap membantumu menemukan kursus terbaik yang sesuai dengan minat belajarmu.", sender: "bot" },
    { text: "Jadi, bidang apa yang ingin kamu pelajari?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    // Add user message to chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Fetch bot response
    try {
      const response = await fetch("https://api.example.com/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Add bot response to chat
      const botMessage = { text: data.reply || "Maaf, saya tidak mengerti.", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot API:", error);
      const errorMessage = { text: "Maaf, terjadi kesalahan. Coba lagi nanti.", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon */}
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        💬
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3>TeraLab Asisten</h3>
            <button className="chatbot-close" onClick={toggleChatbot}>
              ✖
            </button>
          </div>
          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Tulis pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
