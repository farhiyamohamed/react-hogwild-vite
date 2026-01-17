import React from "react";
import HogCard from "./HogCard";

function HogContainer({ hogs, removeHog }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div key={hog.name} className="ui eight wide column">
          <HogCard hog={hog} hideHog={() => removeHog(hog.name)} />
        </div>
      ))}
    </div>
  );
}

export default HogContainer;
