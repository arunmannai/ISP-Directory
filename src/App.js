import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import axios from "axios";

function App() {
  const [apihits, setApihits] = useState(0);
  const [isplist, setIsplist] = useState([]);

  useEffect(() => {
    const proxyServerUrl = "https://aplab-e57c0-default-rtdb.firebaseio.com/servers/api-server.json";
    axios(proxyServerUrl)
      .then(response => response.data)
      .then(url => axios(url+"/isp"))
      .then(response => response.data)
      .then(data => {
        setIsplist(data.isplist);
        setApihits(data.apihits);
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
