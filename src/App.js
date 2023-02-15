import './styles.css'
import { useState } from 'react'

import Header from './components/Header'
import Score from './components/Score'
import Navigation from './components/Navigation'
import GetQuestionButton from './components/GetQuestionButton'
import Category from './components/Category'
import Points from './components/Points'
import Prompt from './components/Prompt'
import RevealButton from './components/RevealButton'

export default function App () {
  const [question, setQuestion] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const getQuestion = async (evt) => {
    try {
      const response = await fetch('https://jservice.io/api/random')
      const data = await response.json()
      setQuestion(data[0])
    } catch (err) {
      console.error(err)
      setErrorMessage(err.message)
    }
  }

  return (
    <div className='App'>
      <Header />
      <div>{errorMessage ? `Error:${errorMessage}` : ''}</div>
      <Score score={score} />
      {question
        ? (
          <Navigation setScore={setScore} score={score} points={question.value} />
          )
        : null}
      <GetQuestionButton
        getQuestion={getQuestion}
        setShowAnswer={setShowAnswer}
      />
      {question ? <Category categorytitle={question.category.title} /> : null}
      {question ? <Points points={question.value} /> : null}
      {question ? <Prompt prompt={question.question} /> : null}
      {question
        ? (
          <RevealButton
            answer={question.answer}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
          />
          )
        : null}
    </div>
  )
}
