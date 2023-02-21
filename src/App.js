import React, { useState } from "react";

function App() {
  // let a = "Sadik";
  //using string in useState
  const [name, setName] = useState("Sadik");

  // using boolean in useState
  const [flag, setFlag] = useState(false);

  // using number in useState
  const [steps, setSteps] = useState(0);

  // using array & object
  const [names, setNames] = useState([]);

  function changeName() {
    console.log("clicked !!");
    return setFlag(!flag);

    //return setName("Ahsan");

    // a = "Ahsan";
    // return a;
  }

  function increment() {
    return setSteps(steps + 1);
  }

  function decrement() {
    return setSteps(steps - 1);
  }

  function addNames(e) {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  }

  return (
    <div className="App">
      {/* <h1>Hello, {name}</h1> */}
      <div>Hello, {flag ? name : ""}</div>
      <button onClick={changeName}>Click Me</button>

      <hr></hr>

      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
      <hr></hr>

      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="add names"
          onChange={(e) => setName(e.target.value)}
        />

        <button>Submit</button>
      </form>
      <hr></hr>
      <div>
        <ul>
          {names.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
