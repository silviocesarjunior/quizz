import "./app.css";
import { useEffect, useState, useMemo } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("R$ 0");

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
      question: "Agumon é o avatar de qual anime?",
      answers: [
        {
          text: "Digimon",
          correct: true,
        },
        {
          text: "Naruto",
          correct: false,
        },
        {
          text: "Yu-gi-oh",
          correct: false,
        },
        {
          text: "One Piece",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "(animes) Quem tem a raposa de nove caldas selado em seu corpo ?",
      answers: [
        {
          text: "Sasuke",
          correct: false,
        },
        {
          text: "Sakura",
          correct: false,
        },
        {
          text: "Orochimaru",
          correct: false,
        },
        {
          text: "Naruto Uzumaki",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "De quem é a famosa frase “Penso, logo existo” ?",
      answers: [
        {
          text: "Descartes",
          correct: true,
        },
        {
          text: "Galileu Galilei",
          correct: false,
        },
        {
          text: "Platão",
          correct: false,
        },
        {
          text: "Sócrates",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Quanto é 3 * 2 + 4?",
      answers: [
        {
          text: "8",
          correct: false,
        },
        {
          text: "10",
          correct: true,
        },
        {
          text: "9",
          correct: false,
        },
        {
          text: "6",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
      answers: [
        {
          text: "12 minutos",
          correct: false,
        },
        {
          text: "8 horas",
          correct: false,
        },
        {
          text: "12 segundos",
          correct: false,
        },
        {
          text: "8 minutos",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Onde se localiza Machu Picchu?",
      answers: [
        {
          text: "México",
          correct: false,
        },
        {
          text: "Uruguai",
          correct: false,
        },
        {
          text: "Peru",
          correct: true,
        },
        {
          text: "Colômbia",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Um anel tem 3 pedras preciosas. Quantas pedras preciosas têm 11 anéis?",
      answers: [
        {
          text: "33",
          correct: true,
        },
        {
          text: "333",
          correct: false,
        },
        {
          text: "30",
          correct: false,
        },
        {
          text: "14",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Quem pintou Mona Lisa?",
      answers: [
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Salvador Dalí",
          correct: false,
        },
        {
          text: "Van Gogh",
          correct: false,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Qual a personagem mais famosa de Maurício de Sousa?",
      answers: [
        {
          text: "Mafalda",
          correct: false,
        },
        {
          text: "Mônica",
          correct: true,
        },
        {
          text: "Smurfette",
          correct: false,
        },
        {
          text: "Magali",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "O que os pandas comem?",
      answers: [
        {
          text: "Aves, ovos e peixe",
          correct: false,
        },
        {
          text: "Frutas e mel",
          correct: false,
        },
        {
          text: "Carnes",
          correct: false,
        },
        {
          text: "Bambu",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Que fruto nasce da oliveira?",
      answers: [
        {
          text: "Amêndoa",
          correct: false,
        },
        {
          text: "Abacate",
          correct: false,
        },
        {
          text: "Açaí",
          correct: false,
        },
        {
          text: "Azeitona",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Em que país de localiza o Taj Mahal?",
      answers: [
        {
          text: "Índia",
          correct: true,
        },
        {
          text: "Egito",
          correct: false,
        },
        {
          text: "Inglaterra",
          correct: false,
        },
        {
          text: "França",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Que navio famoso naufragou na sua viagem inaugural?",
      answers: [
        {
          text: "Titanic",
          correct: true,
        },
        {
          text: "Antonov",
          correct: false,
        },
        {
          text: "Boeing",
          correct: false,
        },
        {
          text: "Airbus",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "O que é um tsunami?",
      answers: [
        {
          text: "Um ciclone",
          correct: false,
        },
        {
          text: "Um tornado",
          correct: false,
        },
        {
          text: "Um maremoto",
          correct: true,
        },
        {
          text: "Um incêndio",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "R$ 100" },
        { id: 2, amount: "R$ 200" },
        { id: 3, amount: "R$ 300" },
        { id: 4, amount: "R$ 400" },
        { id: 5, amount: "R$ 500" },
        { id: 6, amount: "R$ 600" },
        { id: 7, amount: "R$ 700" },
        { id: 8, amount: "R$ 800" },
        { id: 9, amount: "R$ 900" },
        { id: 10, amount: "R$ 1000" },
        { id: 11, amount: "R$ 2000" },
        { id: 12, amount: "R$ 3000" },
        { id: 13, amount: "R$ 4000" },
        { id: 14, amount: "R$ 5000" },
        { id: 15, amount: "R$ 10000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ?
              <h1 className="endText">Você ganhou: {earned}</h1> : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer setStop={setStop} questionNumber={questionNumber} />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                    />
                  </div>
                </>
              )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map(m => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  
                  <span className="moneyListItemAmount">{m.amount}</span>
                  
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />

      )}
    </div>
  );
}

export default App;
