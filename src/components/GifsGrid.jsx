import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifsGrid = ({ cats }) => {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    getGifs(cats).then((img) => setGifs(img));
  }, [cats]);

  return (
    <>
      {gifs.map((gif) => (
        <div
          className="container-card animate__animated animate__jackInTheBox"
          key={gif.id}
        >
          <div className="container-images">
            <img src={gif.images} alt={gif.name} />
          </div>
          <h5>{gif.name}</h5>
        </div>
      ))}
    </>
  );
};

export default GifsGrid;
