import React, { useState } from 'react';
import questions from '../data/questions';
import Result from "./Result";  // Ensure correct path and case
import '../index.css';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption) => {
        const correctAnswer = questions[currentQuestion].correct;
        const isCorrect = selectedOption === correctAnswer;

        setAnswers([...answers, { 
            question: questions[currentQuestion].question, 
            selected: selectedOption, 
            correct: correctAnswer 
        }]);

        if (isCorrect) {
            setScore(score + questions[currentQuestion].points);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="quiz-container">
            {showResult ? (
                <Result score={score} answers={answers} />
            ) : (
                <div className="question-box">
                    <h2>{questions[currentQuestion].question}</h2>
                    <div className="options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
