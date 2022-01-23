// create your App component here
import React, { useState, useEffect } from "react";

export default function App() {
  const [dogToDisplay, setDogToDisplay] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setDogToDisplay(data);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>

  return (
  <div style={{display: "flex", justifyContent: "center"}}>
     <img src={dogToDisplay.message} alt="A Random Dog" />
  </div>)
  ;
}
