import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Copyright from './components/Copyright';
import Data from './components/Data';
import Image from './components/Image';
import Summary from './components/Summary';
import Title from './components/Title'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);




  return (
    <div className="App">

    </div>
  );
}

export default App;
