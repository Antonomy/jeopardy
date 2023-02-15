export default function Score (props) {
  return (
    <div className='score-container'>
      <h2>
        <span className='highlight-title'>Score: </span> {props.score}
      </h2>
    </div>
  )
}
