import BreathingCircle from "./components/circle/BreathingCircle";
import SmokeBackground from "./components/smoke/SmokeBackground";
import "./App.css";

const App = () => {

  return (
    
      <div className="container">
       
        <SmokeBackground />
        <BreathingCircle />
      </div>
   
  );
};

export default App;
