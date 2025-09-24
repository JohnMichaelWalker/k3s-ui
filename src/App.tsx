import React, { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hello, I’m John Walker</h1>
      <p>I’m really happy you can see this!!</p>

      <button
        onClick={() => setVisible(!visible)}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        {visible ? "Hide message" : "Show message"}
      </button>

      {visible && (
        <p style={{ marginTop: "1rem", color: "darkblue" }}>
          This text is toggled by React state.
        </p>
      )}
    </div>
  );
}

export default App;
