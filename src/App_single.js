import React, { useState, useRef, useEffect } from "react";
import "./App_single.css";

function App_single() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMessageSend = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, inputText]);
      setInputText("");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="message-input"
          />
          <button onClick={handleMessageSend} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App_single;
