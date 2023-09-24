import './SmokeBackground.css';  // Import your CSS file

const SmokeBackground = () => {
  const numbers = [1, 35, 40, 45, 36, 21, 25, 29, 22, 33, 28, 3, 16, 5, 20, 6, 7, 9, 10, 17, 12, 13, 14, 2, 8, 5, 15, 4, 19];

  return (
    <div className="smoke-container">
      <div className="smoke">
        {numbers.map((number, index) => (
          <span key={index} style={{'--i': number}}></span>
        ))}
      </div>
    </div>
  );
};

export default SmokeBackground;
