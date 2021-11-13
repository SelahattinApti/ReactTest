import React, { useEffect, useState, useRef } from "react";
//import { Dimensions } from "react";
import { useSelector } from "react-redux";
const test = require("./Example");

const HookExample2 = () => {
  const count = useSelector((state) => state.counter.value);
  const [message, setMessage] = useState([]);
  const [name, setName] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputEl = useRef(null);

  //const { width, height } = Dimensions.get("window");
  //const [sayi, setSayi] = useState(count);
  /*   useEffect(() => {
    // We don't want to fetch message when user is typing
    // Skip effect when isTyping is true
    //test.test();
    //setSayi(count);
    console.log(`Count0: ${count}`);
  }, [count]); */
  /*   document.title = ` ${count}- ${name} hooks`;
  console.log(`FUNCTION RENDERED`); */
  useEffect(() => {
    console.log(`Function did mount`);
    document.title = ` ${count}- ${name} hooks`;
  }, []);
  useEffect(() => {
    // We don't want to fetch message when user is typing
    // Skip effect when isTyping is true
    //test.test();
    //setSayi(count);
    //console.log(`Count0: ${count}`);
    //console.log(`width: ${width} -- height ${height}`);
    //setSayi(count);
    console.log(`useEffect0: ${count}`);
    //setSayi(count);
    if (isTyping) {
      document.title = ` ${count}- ${name} hooks`;
      console.log(`Count ${count}`);
      return;
    }

    loadMessage(name);
  }, [name, isTyping, count]);

  const loadMessage = (nickName) => {
    try {
      fetch(
        `https://json.versant.digital/.netlify/functions/fake-api/message/name/${nickName}`
      )
        .then((res) => res.json())
        .then((message) => {
          console.log("Message:" + message);
          setMessage(message);
        });
    } catch (e) {
      console.log("loadMessageError:" + e);
    }
  };

  const handleNameFormSubmit = (event) => {
    event.preventDefault();
    setIsTyping(false);
    // `current` points to the mounted text input element
    inputEl.current.focus();
    inputEl.current.value = "SELAHATTIN";
  };

  const inputChange = (event) => {
    setIsTyping(true);
    setName(event.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleNameFormSubmit}>
        <input ref={inputEl} value={name} onChange={inputChange} />
        <button>Set nickname {count}</button>
      </form>
      <h1>{message}</h1>
    </div>
  );
};

export default HookExample2;
