// src/component/ChatApp.js
import React, { useState } from 'react';

const ChatApp = ({ visible = true }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const sendMessage = () => {
    if (!userInput.trim()) return;

    const newMessage = {
      sender: 'user',
      text: userInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
    setIsBotTyping(true);

    const botReply = {
      sender: 'bot',
      text: getBotReply(userInput),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botReply]);
      setIsBotTyping(false);
    }, 600);

    setUserInput('');
  };

  const getBotReply = (input) => {
    const lower = input.toLowerCase();
    if (lower.includes("hello") || lower.includes("hi"))
      return "Hi there! 👋 I'm here to guide you through Dwight's projects. Ask away!";
    if (lower.includes("name"))
      return "I'm your friendly DevBot 😄. Ask about any project or tool!";
    if (lower.includes("project") || lower.includes("portfolio"))
      return "Sure! Dwight's projects include a Mood Generator, a Music Player, and a budgeting assistant called MindsBudget.";
    if (lower.includes("mood"))
      return "🧠 The Mood Generator reflects your emotional state with themed visuals and interactions!";
    if (lower.includes("music"))
      return "🎵 The Music Player supports playlist creation, search, and playback. Want to try it?";
    if (lower.includes("mind") || lower.includes("budget") || lower.includes("buy"))
      return "💡 MindsBudget helps you decide if a purchase is worth it. Ask it: 'Should I buy this?'";
    if (lower.includes("tech") || lower.includes("stack"))
      return "This portfolio uses React, Node.js, Express, and some AI logic. Let me know if you're curious!";
    if (lower.includes("bye") || lower.includes("thank"))
      return "You're welcome! Have fun exploring the apps 🚀";
    return "I'm a simple bot 🤖, but I can tell you about Mood Generator, Music Player, or MindsBudget!";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!visible) return null;

  return (
    
    <div style={{
      fontFamily: "Inter, sans-serif",
      background: "linear-gradient(to right, #ece9e6, #ffffff)",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px", // sleeker width
        backgroundColor: "#fff",
        borderRadius: "18px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        overflow: "hidden"
      }}>
        <div style={{
          padding: "16px",
          backgroundColor: "#4A90E2",
          color: "white",
          fontWeight: "bold",
          fontSize: "17px",
          textAlign: "center"
        }}>
          💬 Chat Assistant
        </div>

        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#f8f9fb"
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#4A90E2" : "#e4e6eb",
              color: msg.sender === "user" ? "white" : "#333",
              padding: "10px 14px",
              borderRadius: "18px",
              maxWidth: "80%",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}>
              <div style={{ fontWeight: "600", fontSize: "13px" }}>
                {msg.sender === "user" ? "You" : "🤖 Bot"}
              </div>
              <div style={{ fontSize: "14px", marginTop: "2px" }}>{msg.text}</div>
              <div style={{ fontSize: "11px", opacity: 0.6, marginTop: "4px", textAlign: "right" }}>
                {msg.time}
              </div>
            </div>
          ))}
          {isBotTyping && (
            <div style={{
              alignSelf: "flex-start",
              fontStyle: "italic",
              color: "#888",
              fontSize: "14px"
            }}>
              🤖 Bot is typing...
            </div>
          )}
        </div>

        <div style={{
          padding: "14px",
          borderTop: "1px solid #eee",
          display: "flex",
          gap: "8px",
          backgroundColor: "#fff"
        }}>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows="1"
            placeholder="Type your message..."
            style={{
              flex: 1,
              resize: "none",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "14px"
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              padding: "10px 16px",
              backgroundColor: "#4A90E2",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
