import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import { Footer } from "./Footer";

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
      <div>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{fact}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
