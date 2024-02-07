import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import axios from "axios";

function App() {
  const [apihits, setApihits] = useState(0);
  const [isplist, setIsplist] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_SERVER_URL;
    axios(url+"/isp")
      .then(response => response.data)
      .then(data => {
        setIsplist(data.isplist);
      });
    axios(url+"/counter?name=apihits")
      .then(response => response.data.update_counters.returning[0].value)
      .then(value => {
        setApihits(value);
      });
    }, []);

  if (isplist.length === 0) return <div className="m-3">Loading...</div>;

  return (
    <>
      <Header total={isplist.length} apihits={apihits} />
      <Main isplist={isplist} />
    </>
  );
}

export default App;
