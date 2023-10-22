//Данный фрагмент кода будет отвечать за отображение имени пользователя, списка сообщений и формы отправки нового сообщения в чате.

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
            <button onClick={() => handleDele