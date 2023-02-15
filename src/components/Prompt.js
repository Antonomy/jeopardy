export default function Prompt (props) {
  return (
    <div className='answer-container'>
      <h2>
        <span className='highlight-title'>Prompt: </span>
        {props.prompt}
      </h2>
    </div>
  )
}
