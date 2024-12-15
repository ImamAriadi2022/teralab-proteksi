import React, { useState } from "react";
import "../assets/css/FloatingActionButton.css";
import Chatbot from "./Chatbot";

const FloatingActionButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle FAB menu
  const toggleFabMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  // Buka chatbot dan ambil data dari API
  // const openChatbot = async () => {
  //   try {
  //     const response = await fetch("https://api.example.com/chatbot", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         message: "Hello",
  //       }),
  //     });
  //     const data = await response.json();
  //     alert(`AI Response: ${data.reply}`);
  //   } catch (error) {
  //     console.error("Error fetching chatbot API:", error);
  //   }
  // };

  return (
    <div className="fab-container">
      {/* Main FAB */}
      <button className="fab-main" onClick={toggleFabMenu}>
        +
      </button>

      {/* Menu Options */}
      {isMenuOpen && (
        <div className="fab-options">
        <Chatbot />
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
