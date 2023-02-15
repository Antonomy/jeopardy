export default function Points (props) {
  return (
    <div className='points-container'>
      <h2>
        <span className='highlight-title'>Points: </span> {props.points}
      </h2>
    </div>
  )
}
