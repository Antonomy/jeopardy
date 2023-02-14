export default function ResetButton(props) {
    const resetScore = () => {
      props.setScore(0);
    };
    return (
      <div className="reset-button-container">
        <button id="reset-button" onClick={resetScore}>
          Reset
        </button>
      </div>
    );
  }
  