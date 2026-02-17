import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  return (
    <div className="container">
      <div className="confirm-box">
        <h1>🎉 Booking Successful!</h1>

        <p><strong>Booking ID:</strong> {data?.bookingId}</p>
        <p><strong>Name:</strong> {data?.name}</p>
        <p><strong>Email:</strong> {data?.email}</p>
        <p><strong>Mobile:</strong> {data?.mobile}</p>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
