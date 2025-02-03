import React, { useState } from 'react';
import axios from 'axios';
import MessageList from './MessageList';
import InputForm from './InputForm';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          contents: [{
            role: "user",
            parts: [{ text: input }]
          }]
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const botText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm unable to respond.";
      // setMessages(prev => [...prev, userMessage, { text: botText, sender: 'bot' }]);
      setMessages(prev => [...prev, { text: botText, sender: 'bot' }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, userMessage, { text: "Error fetching response.", sender: 'bot' }]);
    }
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <h2>Gemini Chatbot</h2>
      <MessageList messages={messages} />
      <InputForm 
        input={input}
        setInput={setInput}
        loading={loading}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default Chatbot;