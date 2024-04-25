import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>TravelHive | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> travelhive.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mohdkaif0412/"
        >
          MOHD KAIF
        </a>
      </p>
    </footer>
  );
}
