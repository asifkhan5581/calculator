import React from "react";
import "./Display.css";

function Display({ handleChange, calvalue }) {
  return (
    <>
      <div className="display">
        <div className="input-field">
          <input
            type="text"
            name="number"
            id=""
            value={calvalue}
            readOnly
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default Display;
