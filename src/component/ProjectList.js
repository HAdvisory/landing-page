// src/components/ProjectList.js

import { Link } from "react-router-dom";
import React, { useState } from 'react';
import ChatApp from './ChatApp'; // adjust the path if needed

const ProjectList = () => {
  const [showChat, setShowChat] = useState(false);

  const hoverStyle = {
    transform: 'scale(1.05)',
    backgroundColor: '#357ABD',
  };

  const buttonBase = {
    padding: '12px 24px',
    backgroundColor: '#4A90E2',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const handleMouseOver = (e) => Object.assign(e.target.style, hoverStyle);
  const handleMouseOut = (e) => Object.assign(e.target.style, buttonBase);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: '40px',
    }}>
      <button
        style={buttonBase}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => setShowChat(prev => !prev)}
      >
        💬 Chat with AI in Realtime!
      </button>

      {showChat && (
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <ChatApp />
        </div>
      )}

      <a href="https://mindsbudget.com" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonBase}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          📝 Goal and Finance Tool
        </button>
      </a>

      <a href="https://horosiq.com" target="_blank" rel="noopener noreferrer">
        <button
          style={buttonBase}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          🎵 Mood Generator + Music Player
        </button>
      </a>
    </div>
  );
};

export default ProjectList;
