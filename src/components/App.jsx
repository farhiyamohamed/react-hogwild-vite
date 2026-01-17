import { useState } from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogsData from "../porkers_data";
import FilterSortControls from "./FilterSortControls";
import AddHogForm from "./AddHogForm";

function App() {
  // Initialize hogs with isVisible property
  const [hogList, setHogList] = useState(
    hogsData.map(hog => ({ ...hog, isVisible: true }))
  );

  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");

  // Hide a hog
  const hideHog = (hogName) => {
    setHogList(prevHogs =>
      prevHogs.map(hog =>
        hog.name === hogName ? { ...hog, isVisible: false } : hog
      )
    );
  };

  // Add a new hog
  const addHog = (newHog) => {
    setHogList(prevHogs => [...prevHogs, newHog]);
  };

  // Filter and sort hogs
  const getFilteredSortedHogs = () => {
    let filteredHogs = [...hogList];

    // Filter by greased
    if (filterGreased) {
      filteredHogs = filteredHogs.filter(
        hog => hog.greased && hog.isVisible !== false
      );
    } else {
      filteredHogs = filteredHogs.filter(hog => hog.isVisible !== false);
    }

    // Sort by name or weight
    if (sortBy === "name") {
      filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      filteredHogs.sort((a, b) => a.weight - b.weight);
    }

    return filteredHogs;
  };

  return (
    <div>
      <Nav />
      {/* Form to add new hogs */}
      <AddHogForm addHog={addHog} />

      {/* Filter and sort controls */}
      <FilterSortControls
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Hog cards */}
      <HogContainer hogs={getFilteredSortedHogs()} onHide={hideHog} />
    </div>
  );
}

export default App;
