import { useState } from 'react';
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const userId = Math.floor(Math.random() * 1000);

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async (message: string) => {
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: message }]);

    try {
      const response = await fetch('http://localhost:8080/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
        },
        body: JSON.stringify({
          userInput: message,
          userId,
        }),
      });

      const reader = response.body?.pipeThrough(new TextDecoderStream()).getReader();

      if (reader) {
        let aiMessage = '';

        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: '' }]);

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          aiMessage += value;

          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = { role: 'assistant', content: aiMessage };
            return updatedMessages;
          });
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { messages, handleSendMessage };
};

export default useChat;
