import React from "react";

function FilterSortControls({ filterGreased, setFilterGreased, sortBy, setSortBy }) {
  return (
    <div className="ui form">
      <div className="field">
        <input
          id="greasedFilter"
          type="checkbox"
          checked={filterGreased}
          onChange={() => setFilterGreased((prev) => !prev)}
        />
        <label htmlFor="greasedFilter">Greased Pigs Only?</label>
      </div>
      <div className="field">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortControls;
