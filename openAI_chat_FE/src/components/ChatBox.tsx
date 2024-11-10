import React, { useEffect, useRef } from 'react';
interface ChatBoxProps {
  messages: { role: string; content: string }[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={chatBoxRef} className="chat-container">
      {messages.length ?
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}
          >
            {msg.content}
          </div>
        )) :
        (<div className="message initial-message">Hello! How can I help you today?</div>)
      }
    </div>
  );
};

export default ChatBox;
