import React, { useState } from "react";

function HogCard({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div aria-label="hog card" className="ui card">
      <h3>{hog.name}</h3>
      <img
        src={hog.image}
        alt={`Photo of ${hog.name}`}
        onClick={() => setShowDetails((prev) => !prev)}
      />
      {showDetails && (
  <>
    <p>Specialty: {hog.specialty}</p>
    <p>Weight: {hog.weight}</p>
    <p>{hog.greased ? "Greased" : "Nongreased"}</p>
    <p>Highest Medal Achieved: {hog.highestMedal}</p>
  </>
)}

      <button onClick={hideHog}>Hide Me</button>
    </div>
  );
}

export default HogCard;
