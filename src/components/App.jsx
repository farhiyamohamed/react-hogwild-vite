import React, { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import AddHogForm from "./AddHogForm";
import FilterSortControls from "./FilterSortControls";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const removeHog = (name) => {
    setHogs(hogs.filter((hog) => hog.name !== name));
  };

  const addHog = (newHog) => {
    setHogs([newHog, ...hogs]);
  };

  let displayedHogs = [...hogs];

  if (filterGreased) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }

  if (sortBy === "name") {
    displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    displayedHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />
      <AddHogForm addHog={addHog} />
      <FilterSortControls
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <HogContainer hogs={displayedHogs} removeHog={removeHog} />
    </div>
  );
}

export default App;
