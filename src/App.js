import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [fact, setFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
