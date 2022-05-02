import "./app.css";
import {useState} from "react";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
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
      <div className="main">main</div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(m=>(
          <li className={questionNumber == m.id ? "moneyListItem active" : "moneyListItem"}>
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
