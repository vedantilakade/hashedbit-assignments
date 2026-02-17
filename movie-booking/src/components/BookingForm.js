import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm() {
  const { id } = useParams();   // get movie id
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingId = "BOOK" + Math.floor(Math.random() * 10000);

    navigate("/confirmation", {
      state: {
        ...form,
        bookingId: bookingId,
        movieId: id
      }
    });
  };

  return (
    <div className="container">
      <h1>📝 Book Your Seat</h1>

      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
