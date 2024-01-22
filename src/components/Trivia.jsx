import React, { useEffect, useState } from "react";
import useSound from 'use-sound';
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

export default function Trivia({setStop, data, setQuestionNumber, questionNumber}) {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setclassName] = useState(null)
    const [letsPlay] = useSound(play, {volume : 0.25})
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        letsPlay()
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(data[questionNumber-1]);
    }, [data,questionNumber]);

    const delay = (duration, callback) => {
        setTimeout (() => {
            callback()
        }, duration);
    }
    

    const handleClick = (c) =>  {
        setSelectedAnswer(c)
        setclassName("answer active")
        
        delay(3000, () => { setclassName(c.correct ? "answer correct" : "answer wrong")})

        delay(5000, () => { 
            if (c.correct) {
                correctAnswer();
                delay(1000,()=>{
                    setQuestionNumber((prov) => prov + 1)
                    setSelectedAnswer(null)
                })
                
            } else {
                wrongAnswer();
                delay(1000,()=>{
                    setStop(true)
                })
                
            }
        })
    }
    return (
        <div className="trivia" > 
            <div className="question">{question?.question}</div>
            <div className="answers">
                {
                    question?.answers.map(c=>
                        <div className={selectedAnswer === c ? className :'answer' } onClick={() =>  handleClick(c) } > 
                            {c.text}
                        </div>,
                        
                        )
                }

                
            </div>
            
        </div>
        
    )
}