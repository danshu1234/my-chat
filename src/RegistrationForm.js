//Добавим форму регистрации
//Хук useState будет отслеживать значение ввода
//Хук useHistory будет перенаправлять пользователя на страницу чата после завершения регистрации

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RegistrationForm = ({ setUsername }) => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(inputValue);
    history.push("/chat");
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter username"
        />
        <button type="submit">Зарегестрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationForm;