import { useState } from "react"

import QUESTIONS from '../questions';
import QUIZ_COMPLETE from '../assets/quiz-complete.png'

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = userAnswers.length;
    const isQuizCompleted = activeQuestionIndex === (QUESTIONS.length - 1);
    const suffledAnswers = shuffle(QUESTIONS[activeQuestionIndex].answers);
    console.log(suffledAnswers)
    console.log(userAnswers.length, QUESTIONS.length);

    function handleSelectedAnswer(selectedAnswer) {
        setUserAnswers((prev) => {
            return [...prev, selectedAnswer];
        });
    }

    function shuffle(array) {
        //The function uses the Fisher-Yates shuffle algorithm, also known as the Knuth shuffle
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    if(isQuizCompleted) {
        return <div id="summary">
            <img src={QUIZ_COMPLETE} alt="quiz completed"/>
            <h2>Quiz completed!</h2>
        </div>
    }

    return <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            {!isQuizCompleted && <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map(item => {
                    return <li key={item} className="answer">
                            <button onClick={() => handleSelectedAnswer(item)}>{item}</button>
                        </li>
                })}
            </ul>}
            {isQuizCompleted && <div> end reached</div>}
        </div>
        </div>
}