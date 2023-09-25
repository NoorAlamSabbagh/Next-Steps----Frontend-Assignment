import { useEffect, useState } from "react";
import "./BreathingCircle.css";
// import { NavLink } from "react-router-dom";

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
        <button className="btn">
        {/* <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 
                    ${isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  NextPage
                </NavLink> */}
                NextPage
      </button>
      </div>
     
      
    </>
  );
};

export default BreathingCircle;
