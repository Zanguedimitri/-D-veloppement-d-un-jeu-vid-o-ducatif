import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import { Timer } from "./components/Timer";
import { Start } from "./components/Start";
import "./app.css";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [username, setUsername] = useState(null)
  const [stop,setStop] = useState(false)
  const [enard,setEnard] = useState("fcfa 0")

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
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

  const moneyPyramid = useMemo(() => 
    [
      {id :15, amount:'fcfa 5.000.000' },
      {id :14, amount:'fcfa 4.000.000' },
      {id :13, amount:'fcfa 3.000.000' },
      {id :12, amount:'fcfa 2.000.000' },
      {id :11, amount:'fcfa 1.000.000' },
      {id :10, amount:'fcfa 500.000' },
      {id :9, amount:'fcfa 400.000' },
      {id :8, amount:'fcfa 300.000' },
      {id :7, amount:'fcfa 200.000' },
      {id :6, amount:'fcfa 100.000' },
      {id :5, amount:'fcfa 50.000' },
      {id :4, amount:'fcfa 10.000' },
      {id :3, amount:'fcfa 5.000' },
      {id :2, amount:'fcfa 1.000' },
      {id :1, amount:'fcfa 500' }
    ], [])
   useEffect(() => {
    questionNumber > 1 && setEnard(moneyPyramid.find((m) => m.id === questionNumber-1).amount)
  }, [moneyPyramid,questionNumber]);
  return (
    <div className="app">

    {username ? (

      <>
        
      <div className="main">
        {stop ? (
          <h1 className="endtext">Your earned {enard}</h1>
        ): ( 
         <>
            <div className="top">
              <div className="timer">{ <Timer setStop = {setStop} questionNumber = {questionNumber} /> }</div>
            </div>
            <div className="bottom">
              <Trivia 
                setStop={setStop} 
                data = {data} 
                setQuestionNumber = {setQuestionNumber}
                questionNumber = {questionNumber} 
              
              />
            </div>
          </> 
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList" >
          { moneyPyramid.map(m =>(
             <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
             <span className="moneyListItemNumber"> {m.id}</span>
             <span className="moneyListItemAmount">{m.amount} </span>
           </li>
          ))
           
          }
         
         
        </ul>
      </div>
      </>

    ) : <Start setUsername =  {setUsername} /> }

    </div>
  );
}

export default App;
