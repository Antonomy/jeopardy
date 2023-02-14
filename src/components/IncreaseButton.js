export default function IncreaseButton(props) {
    const increaseScore = () => {
      props.setScore(props.score + props.points);
    };
  
    return (
      <div className="increase-button-container">
        <button id="increase-button" onClick={increaseScore}>
          Increase
        </button>
      </div>
    );
  }
  