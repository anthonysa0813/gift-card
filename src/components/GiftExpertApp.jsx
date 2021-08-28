import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifsGrid from "./GifsGrid";

const GiftExpertApp = () => {
  //   const [heroes, setHeroes] = useState(["One punch", "Dragon ball", "Naruto"]);
  const [cats, setCats] = useState("");
  return (
    <>
      <header>
        <h2>GiftExpertApp</h2>
        <AddCategory setCats={setCats} />
      </header>
      <hr />

      <div className="container">
        {cats ? <GifsGrid cats={cats} /> : "No haz buscado nada...."}
      </div>
    </>
  );
};
export default GiftExpertApp;
