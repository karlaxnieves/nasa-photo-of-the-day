import React, { useState, useEffect } from "react";
import axios from 'axios'
import Img from './Components/Image'
import Copyright from './Components/Copyright'
import DateImg from './Components/Date'
import Summary from './Components/Summary'
import Title from './Components/Title'
import "./App.css";

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => { //once the API is received, responsd with the function of setData's.data object
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []) //

  return (
    <div className="App">
      <Title title={data.title} />
      <Img image={data.url} />
      <DateImg date={data.date} />
      <Summary summary={data.explanation} />
      <Copyright copyright={data.copyright} />
    </div>
  );
}

export default App;
