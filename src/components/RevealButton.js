export default function RevealButton(props) {
    return (
      <div className="reveal-button-container">
        <button
          id="reveal-button"
          onClick={() => {
            props.setShowAnswer(!props.showAnswer);
          }}
        >
          Click to {props.showAnswer ? "Hide" : "Show"} Answer
        </button>
        {props.showAnswer ? (
          <h2 id="reveal-answer">
            <span className="highlight-title">Answer is: </span>What is{" "}
            {props.answer}?
          </h2>
        ) : (
          ""
        )}
      </div>
    );
  }
  