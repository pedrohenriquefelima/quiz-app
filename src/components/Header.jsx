import QUIZ_LOGO from '../assets/quiz-logo.png';

export default function Header() {
    return <header>
        <img src={QUIZ_LOGO} alt="quiz logo"/>
        <h1>ReactQuiz</h1>
    </header>
}