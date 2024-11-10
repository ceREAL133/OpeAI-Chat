import React, { useState } from 'react';

interface InputBoxProps {
    onSendMessage: (message: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    const handleEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSend();
    }

    return (
        <div className="input-container">
            <input
                className="input-box"
                type="text"
                value={input}
                onKeyDown={handleEnterPressed}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="button"
                onClick={handleSend}>
                Send
            </button>
        </div>
    );
};

export default InputBox;
