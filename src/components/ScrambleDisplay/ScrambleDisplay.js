import React, { useState } from "react";

const ScrambleGenerator = () => {
  const moves = ["U", "D", "L", "R", "F", "B"];
  const modifiers = ["", "'", "2"];

  const generateScramble = () => {
    const scrambleLength = 20; // Adjust the length of the scramble as needed
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
    <div>
      <h2>Scramble: {scramble}</h2>
      <button onClick={regenerateScramble}>Regenerate Scramble</button>
    </div>
  );
};

export default ScrambleGenerator;
