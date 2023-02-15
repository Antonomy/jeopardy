import DecreaseButton from './DecreaseButton'
import IncreaseButton from './IncreaseButton'
import ResetButton from './ResetButton'

export default function Navication (props) {
  return (
    <div className='navigation'>
      <DecreaseButton
        setScore={props.setScore}
        score={props.score}
        points={props.points}
      />
      <IncreaseButton
        setScore={props.setScore}
        score={props.score}
        points={props.points}
      />
      <ResetButton setScore={props.setScore} />
    </div>
  )
}
