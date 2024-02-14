import React, { useState } from "react";
import "./ScrambleDisplay.css";

const ScrambleGenerator = () => {
  const moves = ["U", "D", "L", "R", "F", "B"];
  const modifiers = ["", "'", "2"];

  const generateScramble = () => {
    const scrambleLength = 20;
    let scramble = [];

    for (let i = 0; i < scrambleLength; i++) {
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      const randomModifier =
        modifiers[Math.floor(Math.random() * modifiers.length)];
      const moveNotation = randomMove + randomModifier;
      scramble.push(moveNotation);
    }

    return scramble.join(" ");
  };

  const [scramble, setScramble] = useState(generateScramble);

  const regenerateScramble = () => {
    setScramble(generateScramble());
  };

  return (
    <div className="scrambleBox">
      <h2>Scramble: {scramble}</h2>
      <button className="regenerateButton" onClick={regenerateScramble}>
        Regenerate Scramble
      </button>
    </div>
  );
};

export default ScrambleGenerator;
