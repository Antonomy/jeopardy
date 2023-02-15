export default function GetQuestionButton (props) {
  return (
    <div className='get-question-button-container'>
      <button
        id='get-question-button'
        onClick={(e) => {
          e.preventDefault()
          props.setShowAnswer(false)
          props.getQuestion()
        }}
      >
        Get Question
      </button>
      <span>{props.question}</span>
    </div>
  )
}
