export default function Category(props) {
    return (
      <div className="category-container">
        <h2>
          <span className="highlight-title">Category: </span>{" "}
          {props.categorytitle}
        </h2>
      </div>
    );
  }
  