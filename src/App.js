import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    }]);
  const [indexNum, setIndexNum] = useState(0);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);

  const checkAns = (userSel, correctAns) => {
    if (userSel == correctAns) {
      setMarks(marks + 10)
    }
    if (indexNum + 1 == questions.length) {
      setResult(true)
    }
    setIndexNum(indexNum + 1)
  }

  return (
    <div className='body'>
      {result ? (<h1 className='result'>Your Score "{marks}" points</h1>) : <div>
        <div className='question'><h1>{questions[indexNum].question}</h1>
        </div>
        <div className='optionBox'>{questions[indexNum].options.map((x, i) => {
          return <div key={i} className='options' onClick={() => checkAns(x, questions[indexNum].answer)}>{x}</div>
        })}
        </div>
      </div>}
    </div>


  );
}

export default App;
