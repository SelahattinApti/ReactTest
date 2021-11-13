import React from "react";

const RandomNumberContext = React.createContext();

function RandomNumber() {
  const { randomNumber } = React.useContext(RandomNumberContext);
  return <div>Username: {randomNumber}</div>;
}

function NumberGenerator() {
  const { setRandomNumber } = React.useContext(RandomNumberContext);
  const generateRandomNumber = () => setRandomNumber(Math.random());
  return <button onClick={generateRandomNumber}>Generate Random Number</button>;
}

function RandomNumbers() {
  const [randomNumber, setRandomNumber] = React.useState(0);
  const value = { randomNumber, setRandomNumber };

  return (
    <div>
      <RandomNumberContext.Provider value={value}>
        <RandomNumber />
        <NumberGenerator />
      </RandomNumberContext.Provider>
    </div>
  );
}
export default RandomNumbers;
