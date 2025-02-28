import React from 'react';

const Result = ({ score, answers }) => {
    return (
        <div className="result-container">
            <h2>Quiz Completed!</h2>
            <h3>Your Score: {score}</h3>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index} className={answer.selected === answer.correct ? "correct" : "wrong"}>
                        <strong>Q: {answer.question}</strong>
                        <p>Your Answer: {answer.selected}</p>
                        {answer.selected !== answer.correct && <p>Correct Answer: {answer.correct}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Result;
