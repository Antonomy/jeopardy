export default function DecreaseButton(props) {
    const decreaseScore = () => {
      props.setScore(props.score - props.points);
    };
    return (
      <div className="decrease-button-container">
        <button id="decrease-button" onClick={decreaseScore}>
          Decrease
        </button>
      </div>
    );
  }
  
  // onClick=
  