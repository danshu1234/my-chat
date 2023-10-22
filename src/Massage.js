//Пропишем часть, которую будет видеть сам пользователь

import React, { useState } from "react";

const Chat = ({ username, messages, sendMessage, deleteMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleDeleteMessage = (messageId) => {
    deleteMessage(messageId);
  };

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <p>{message.username}: {message.message}</p>
            <button onClick={() => handleDeleteMessage(message.id)}>Удалить</button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message"
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Chat;