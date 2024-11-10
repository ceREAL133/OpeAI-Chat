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

    return (
        <div className="input-container">
            <input
                className="input-box"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="button" onClick={handleSend}>Send</button>
        </div>
    );
};

export default InputBox;
