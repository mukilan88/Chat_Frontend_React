import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputTextUser1, setInputTextUser1] = useState("");
  const [inputTextUser2, setInputTextUser2] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleMessageSendUser1 = () => {
    if (inputTextUser1.trim() !== "") {
      setMessages([{ text: inputTextUser1, user: "user1" }, ...messages]);
      setInputTextUser1("");
    }
  };

  const handleMessageSendUser2 = () => {
    if (inputTextUser2.trim() !== "") {
      setMessages([{ text: inputTextUser2, user: "user2" }, ...messages]);
      setInputTextUser2("");
    }
  };

  return (
    <div className="App">
      <div className="user1_text">
        <input
          type="text"
          value={inputTextUser1}
          onChange={(e) => setInputTextUser1(e.target.value)}
          placeholder="User 1: Type your message..."
          className="input-box"
        />
        <button onClick={handleMessageSendUser1} className="send-button">
          Send
        </button>
      </div>
      <div className="chat-container" ref={chatRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message-container ${message.user}`}>
            <div className="message">{message.text}</div>
          </div>
        ))}
        <div ref={chatRef}></div>
      </div>
      <div className="user2_text">
        <input
          type="text"
          value={inputTextUser2}
          onChange={(e) => setInputTextUser2(e.target.value)}
          placeholder="User 2: Type your message..."
          className="input-box"
        />
        <button onClick={handleMessageSendUser2} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
