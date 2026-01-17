import { useState } from "react";

function AddHogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add isVisible property for new hog
    addHog({ ...formData, weight: parseFloat(formData.weight), isVisible: true });

    // Reset form
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": ""
    });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h3>Add a New Hog</h3>

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          name="image"
          type="text"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">Specialty</label>
        <input
          id="specialty"
          name="specialty"
          type="text"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="weight">Weight</label>
        <input
          id="weight"
          name="weight"
          type="number"
          step="0.1"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <input
          id="greased"
          name="greased"
          type="checkbox"
          checked={formData.greased}
          onChange={handleChange}
        />
        <label htmlFor="greased">Greased</label>
      </div>

      <div className="field">
        <label htmlFor="highest-medal">Highest Medal Achieved</label>
        <input
          id="highest-medal"
          name="highest medal achieved"
          type="text"
          value={formData["highest medal achieved"]}
          onChange={handleChange}
        />
      </div>

      <button className="ui button primary" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default AddHogForm;
