import "./app.css";
import {useState} from "react";
import Trivia from "./components/Trivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const data = [
    {
      id: 1,
      question: "Qual é o canal mais educativo para as crianças assistirem?",
      answers: [
        {
          text: "X",
          correct: false,
        },
        {
          text: "Cultura",
          correct: true,
        },
        {
          text: "Y",
          correct: false,
        },
        {
          text: "Z",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  
  const moneyPyramid = [
    {id:1, amount:"R$ 100"},
    {id:2, amount:"R$ 200"},
    {id:3, amount:"R$ 300"},
    {id:4, amount:"R$ 400"},
    {id:5, amount:"R$ 500"},
    {id:6, amount:"R$ 600"},
    {id:7, amount:"R$ 700"},
    {id:8, amount:"R$ 800"},
    {id:9, amount:"R$ 900"},
    {id:10, amount:"R$ 1000"},
    {id:11, amount:"R$ 2000"},
    {id:12, amount:"R$ 3000"},
    {id:13, amount:"R$ 4000"},
    {id:14, amount:"R$ 5000"},
    {id:15, amount:"R$ 10000"},
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">60</div>
        </div>
        <div className="bottom">
          <Trivia 
          data={data} 
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          />
          </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m=>(
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
