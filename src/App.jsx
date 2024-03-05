import { IoArrowUpCircleSharp, IoArrowDownCircleSharp } from "react-icons/io5";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [movingUp, setMovingUp] = useState(false);
  const [movingDown, setMovingDown] = useState(false);

  const handleUpArrow = (id) => {
    // while the lift is moving DOWN, UP button should not work
    if (movingDown) {
      console.log("UP Pressed!");
      return;
    }

    if (id == 0 && selectedFloor == 0) {
      setMovingUp(true);
      setTimeout(()=> {
        setSelectedFloor(2);
        setMovingUp(false);
      }, 10000);
    } else if (id == 1 >= selectedFloor) {
      if (selectedFloor == id) {
        setMovingUp(true);
        setTimeout(() => {
          setSelectedFloor(2);
          setMovingUp(false);
        }, 5000);
      } else {
        setMovingUp(true);
        setTimeout(()=> {
          setSelectedFloor(1);
          setMovingUp(false);
        }, 5000);
      }
    } else {
      console.log("UP");
      return;
    }
    
  };
  const handleDownArrow = (id) => {
    // while the lift is moving UP, DOWN button should not work
    if (movingUp) {
      console.log("DOWN pressed");
      return;
    }

    if (id == 2 && selectedFloor == 2) {
      setMovingDown(true);
      setTimeout(()=> {
        setSelectedFloor(0);
        setMovingDown(false);
      }, 10000);
    } else if (id == 1 && id <= selectedFloor) {
      if (selectedFloor == id) {
        setMovingDown(true);
        setTimeout(()=> {
          setSelectedFloor(0);
          setMovingDown(false);
        }, 5000);
      } else {
        setMovingDown(true);
        setTimeout(()=> {
          setSelectedFloor(1);
          setMovingDown(false);
        }, 5000);
      }
    } else {
      console.log("DOWN!")
      return;
    }
  };

  return (
    <div className="container">
      <div className="elevator-container">
        <div className="floor second-floor">
          <div className="floor-name">Level 2</div>
          {selectedFloor == 2 ? <div className="elevator">
            <h3>Elevator</h3>
          </div> : null}
        </div>
        <div className="floor first-floor">
          <div className="floor-name">Level 1</div>
          {selectedFloor == 1 ? <div className="elevator">
          <h3>Elevator</h3>
          </div> : null}
        </div>
        <div className="floor ground-floor">
          <div className="floor-name">Level 0</div>
          {selectedFloor == 0 ? <div className="elevator">
          <h3>Elevator</h3>
          </div> : null}
        </div>
      </div>

      <div className="arrow-container">
        <div className="btn">
          <IoArrowDownCircleSharp
            className="arrow-icon"
            onClick={() => handleDownArrow(2)}
          />
        </div>
        <div className="btn first-floor_btn">
          <IoArrowUpCircleSharp
            className="arrow-icon"
            onClick={() => handleUpArrow(1)}
          />
          <IoArrowDownCircleSharp
            className="arrow-icon"
            onClick={() => handleDownArrow(1)}
          />
        </div>
        <div className="btn" id="0">
          <IoArrowUpCircleSharp
            className="arrow-icon"
            onClick={() => handleUpArrow(0)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
