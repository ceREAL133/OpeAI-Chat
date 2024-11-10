import React from 'react';
import ChatBox from './components/ChatBox';
import InputBox from './components/InputBox';
import useChat from './hooks/useChat';
import './style.css'

const App: React.FC = () => {
  const { messages, handleSendMessage } = useChat();

  
  return (
    <div className="App">
      <ChatBox messages={messages} />
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
