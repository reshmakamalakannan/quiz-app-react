import React, { useState } from "react";
export default function Quiz() {
  const questions = [
    {
      questionText: "In which language is React.js written?",
      answerOptions: [
        { answerText: "Python", isCorrect: false },
        { answerText: "Java", isCorrect: false },
        { answerText: "JavaScript", isCorrect: true },
        { answerText: "PHP", isCorrect: false },
      ],
    },
    {
      questionText: "What are the two ways to handle data in React?",
      answerOptions: [
        { answerText: "State & services", isCorrect: false },
        { answerText: "State & Props", isCorrect: true },
        { answerText: "State & Components", isCorrect: false },
        { answerText: "State & Component", isCorrect: false },
      ],
    },
    {
      questionText: "Babel is a?",
      answerOptions: [
        { answerText: "Transpiler", isCorrect: true },
        { answerText: "Compiler", isCorrect: false },
        { answerText: "All of the above", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },

    {
      questionText: "Why is ref used?",
      answerOptions: [
        { answerText: "to directly access the DOM node", isCorrect: true },
        { answerText: "to call a function", isCorrect: false },
        { answerText: "All of the above", isCorrect: false },
        { answerText: "to refer another JS file", isCorrect: false },
      ],
    },

    {
      questionText:
        "How many no.of elements a valid react component can return?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "1", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <center>
      {" "}
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  id="btn"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </center>
  );
}
