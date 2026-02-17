import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();   // get movie id from URL
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>🎥 Movie Details</h1>

      <div className="details-card">
        <p><strong>Movie ID:</strong> {id}</p>
        <p><strong>Duration:</strong> 2h 30m</p>
        <p><strong>Rating:</strong> ⭐⭐⭐⭐☆</p>
        <p><strong>Language:</strong> English</p>

        <button onClick={() => navigate(`/book/${id}`)}>
          Book Seat
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
