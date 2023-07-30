import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';

function App() {
  const [apihits, setApihits] = useState(0);
  const [isplist, setIsplist] = useState([]);

  useEffect(() => {
    const apiUrl =
      'https://kazooxkp3g.execute-api.us-west-2.amazonaws.com/api/isp';
    fetch(apiUrl)
      .then((data) => data.json())
      .then((data) => {
        setIsplist(data.isplist);
        setApihits(data.apihits);
      });
  }, []);

  if (isplist.length === 0) return <>Loading...</>;

  return (
    <>
      <Header total={isplist.length} apihits={apihits} />
      <Main isplist={isplist} />
    </>
  );
}

export default App;
