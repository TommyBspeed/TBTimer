import React from "react";

export default function TimeCache() {
  // Retrieving data from local storage
  const storedData = localStorage.getItem("time");
  const parsedData = JSON.parse(storedData);
  return (
    <div className="times-container">
      <div>TimeCache</div>
      <div className="times-box">
        <ul>
          <li>{parsedData}</li>
        </ul>
      </div>
    </div>
  );
}
