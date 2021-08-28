import React, { useState } from "react";
// import PropTypes from "prop-types";

const AddCategory = ({ setCats }) => {
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const addCategory = (e) => {
    e.preventDefault();

    if (!category.trim()) {
      console.log("campo vacío!");
      return;
    }
    setCats(category);
  };

  return (
    <>
      <form onSubmit={addCategory}>
        <input
          type="text"
          placeholder="Busca algo..."
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};

// AddCategory.propTypes = {
//   setHeroes: PropTypes.func.isRequired,
// };

export default AddCategory;
