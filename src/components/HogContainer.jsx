import HogCard from "./HogCard";

function HogContainer({ hogs, onHide }) {
  return (
    <div className="ui grid container">
      {hogs.map(hog => (
        <div key={hog.name} className="ui eight wide column">
          <HogCard hog={hog} onHide={onHide} />
        </div>
      ))}
    </div>
  );
}

export default HogContainer;
