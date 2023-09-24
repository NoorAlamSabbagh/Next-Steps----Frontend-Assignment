import { useEffect, useState } from "react";
import "./BreathingCircle.css";

const BreathingCircle = () => {
  const [breathingState, setBreathingState] = useState("INHALE 3 SECONDS");

  useEffect(() => {
    const interval = setInterval(() => {
      if (breathingState === "INHALE 3 SECONDS") {
        setTimeout(() => setBreathingState("HOLD  2 SECONDS"), 1000);
        setTimeout(() => setBreathingState("EXHALE 3 SECONDS"), 3000);
      } else if (breathingState === "EXHALE 3 SECONDS") {
        setTimeout(() => setBreathingState("HOLD 2 SECONDS"), 1000);
        setTimeout(() => setBreathingState("INHALE 3 SECONDS"), 3000);
      } else if (breathingState === "HOLD 2 SECONDS") {
        setTimeout(() => setBreathingState("EXHALE 3 SECONDS"), 3000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [breathingState]);

  return (
    <>
      <div className="container">
        <div className={`circle ${breathingState.toLowerCase()}`}>
          <div className="text">{breathingState}</div>
        </div>
        <button className="btn">Next Page</button>
      </div>
     
      
    </>
  );
};

export default BreathingCircle;
