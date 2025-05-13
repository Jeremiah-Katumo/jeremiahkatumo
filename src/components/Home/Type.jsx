import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
      <span className="typewriter-text">
        <Typewriter options={{
          strings: [
            "Data Scientist",
            "Statistician",
            "Software Engineer",
            "Freelancer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          cursor: "|",
          callback: function () {
            console.log("Typed!");
          },
          fontSize: "10em",
          display: "flex",
          justifyContent: "left",
          alignItems: "start",
          color: "blue"
        }} />
      </span>
    </div>
  );
}

export default Type;