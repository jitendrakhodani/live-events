import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface ChatMessage {
  id: string;
  user: string;
  message: string;
  emoji?: string;
}

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const emojis = ['👍', '❤️', '😂', '😮', '🎉'];

  const sendMessage = () => {
    if (newMessage.trim() || selectedEmoji) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        user: 'Anonymous',
        message: newMessage,
        emoji: selectedEmoji
      };
      setMessages([...messages, message]);
      setNewMessage('');
      setSelectedEmoji('');
    }
  };

  return (
    <div className="border rounded-lg h-[720px] flex flex-col">
      <div className="flex-grow overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-center space-x-2">
            <span className="font-bold">Anonymous:</span>
            <span>{msg.message}</span>
            {msg.emoji && <span>{msg.emoji}</span>}
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex space-x-2">
        <div className="flex space-x-1 mr-2">
          {emojis.map((emoji) => (
            <button 
              key={emoji} 
              onClick={() => setSelectedEmoji(emoji)}
              className={`text-2xl ${selectedEmoji === emoji ? 'bg-blue-200' : ''}`}
            >
              {emoji}
            </button>
          ))}
        </div>
        <Input 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default LiveChat;
