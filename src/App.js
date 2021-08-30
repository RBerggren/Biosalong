import React, { useState } from "react";

import "./App.css";

console.log('Hello World12312321312'); 
console.log('222222222222Hello World12312321312'); 

const Seat = props => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

const InfoBoxes = () => (
  <>
    <div className="number" style={{ backgroundColor: colors["available"] }}>
      <p className="infoText">Ledig</p>
    </div>
    <div className="number" style={{ backgroundColor: colors["selected"] }}>
      <p className="infoText">Vald</p>
    </div>
    <div className="number" style={{ backgroundColor: colors["used"] }}>
      <p className="infoText">Bokad</p>
    </div>
  </>
);

const SaveBooking = props => (
  <button className="save" onClick={() => props.onClick()}>
    Boka platser
  </button>
);

const Cinema = () => {
  const [candidateNums, setCandidateNums] = useState([]);
  const [takenNums, setTakenNums] = useState([]);

  const numberStatus = number => {
    if (takenNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return "selected";
    }
    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === "used") {
      return;
    }
    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);
    setCandidateNums(newCandidateNums);
    console.log(candidateNums);
  };

  const saveSeats = () => {
    setTakenNums(candidateNums);
  };
  return (
    <div className="game">
      <div className="help">Bioduk</div>
      <div className="body">
        <div className="right">
          {amountOfSeats.range(1, 25).map((
            number // Antal platser, ändra här för att öka. Måste även ändra divvens storlek i css
          ) => (
            <Seat
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
        <div className="saveBtn">
          <SaveBooking onClick={saveSeats}></SaveBooking>
          <InfoBoxes></InfoBoxes>
        </div>
      </div>
    </div>
  );
};

// Färger
const colors = {
  available: "lightgreen",
  used: "lightcoral",
  selected: "yellow"
};

const amountOfSeats = {
  // Skapar en array med alla platser
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i)
};

export default Cinema;
