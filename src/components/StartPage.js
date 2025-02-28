import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <h1>Welcome to the Quiz Game!</h1>
      <button onClick={() => navigate("/quiz")} className="start-button">
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;
