function FilterSortControls({ filterGreased, setFilterGreased, sortBy, setSortBy }) {
    return (
      <div className="ui form">
        <div className="field">
          <input
            type="checkbox"
            id="greased"
            checked={filterGreased}
            onChange={() => setFilterGreased(!filterGreased)}
          />
          <label htmlFor="greased">Greased Only</label>
        </div>
  
        <div className="field">
          <label htmlFor="sort">Sort By</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default FilterSortControls;
  