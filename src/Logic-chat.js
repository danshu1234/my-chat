//Пропишем основную логику чата, используя HTTP клиент axios
//Добавим роутинг для переключения между страницей регистрации пользователя и самим чатом

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import RegistrationForm from "./components/RegistrationForm";
import Chat from "./components/Chat";

const ChatApp = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch initial messages from the server
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("/api/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  const sendMessage = async (message) => {
    try {
      const data = {
        username: username,
        message: message,
      };

      await axios.post("/api/messages", data);
      fetchMessages();
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      await axios.delete(`/api/messages/${messageId}`);
      fetchMessages();
    } catch (error) {
      console.error("Failed to delete message", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <RegistrationForm setUsername={setUsername} />
        </Route>
        <Route path="/chat">
          <Chat
            username={username}
            messages={messages}
            sendMessage={sendMessage}
            deleteMessage={deleteMessage}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default ChatApp;