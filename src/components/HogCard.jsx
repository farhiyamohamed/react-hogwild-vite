import { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  // Skip rendering if hog is hidden
  if (hog.isVisible === false) return null;

  return (
    <div aria-label="hog card" className="ui card">
      <h3>{hog.name}</h3>
      <img 
        src={hog.image} 
        alt={hog.name} 
        onClick={() => setShowDetails(!showDetails)} 
      />
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight}</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
          <p>Highest Medal: {hog["highest medal achieved"]}</p>
        </div>
      )}
      <button onClick={() => onHide(hog.name)}>Hide Me</button>
    </div>
  );
}

export default HogCard;
