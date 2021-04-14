import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Copyright from './components/Copyright';
import Date from './components/Date';
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
      <Title title={data.title} />
      <Image image={data.url} />
      <Date date={data.date} />
      <Summary summary={data.explanation} />
      <Copyright copyright={data.copyright} />
    </div>
  );
}

export default App;
