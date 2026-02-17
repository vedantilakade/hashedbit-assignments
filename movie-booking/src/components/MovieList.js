import React from "react";
import { useNavigate } from "react-router-dom";

import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import m6 from "../images/m6.png";
import m7 from "../images/m7.png";
import m8 from "../images/m8.png";
import m9 from "../images/m9.png";
import m10 from "../images/m10.png";
import m11 from "../images/m11.png";
import m12 from "../images/m12.png";
import m13 from "../images/m13.png";
import m14 from "../images/m14.png";
import m15 from "../images/m15.png";
import m16 from "../images/m16.png";

function MovieList() {
  const navigate = useNavigate();

  const movies = [
    { id: 1, name: "Inception", image: m1 },
    { id: 2, name: "Interstellar", image: m2 },
    { id: 3, name: "Avatar", image: m3 },
    { id: 4, name: "Titanic", image: m4 },
    { id: 5, name: "Joker", image: m5 },
    { id: 6, name: "Frozen", image: m6 },
    { id: 7, name: "Matrix", image: m7 },
    { id: 8, name: "Dune", image: m8 },
    { id: 9, name: "Avengers", image: m9 },
    { id: 10, name: "Coco", image: m10 },
    { id: 11, name: "Batman", image: m11 },
    { id: 12, name: "Iron Man", image: m12 },
    { id: 13, name: "Aladdin", image: m13 },
    { id: 14, name: "Thor", image: m14 },
    { id: 15, name: "Up", image: m15 },
    { id: 16, name: "Lion King", image: m16 },
  ];

  return (
    <div className="container">
      <h1>🎬 Movie Booking</h1>

      <div className="grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.name} />
            <h3>{movie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
