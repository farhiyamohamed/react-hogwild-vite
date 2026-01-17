import React, { useState } from "react";

function AddHogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    highestMedal: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name: formData.name,
      image: formData.image,
      specialty: formData.specialty,
      weight: Number(formData.weight),
      greased: formData.greased,
      highestMedal: formData.highestMedal,
    };
    addHog(newHog);
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      highestMedal: "",
    });
  };
  

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          name="image"
          required
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          name="weight"
          type="number"
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
        <label htmlFor="greased">Greased?</label>
      </div>
      <div className="field">
        <label htmlFor="highestMedal">Highest Medal Achieved:</label>
        <input
          id="highestMedal"
          name="highestMedal"
          value={formData.highestMedal}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="ui button primary">
        Add Hog
      </button>
    </form>
  );
}

export default AddHogForm;
