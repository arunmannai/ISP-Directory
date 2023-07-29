import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import data from './isp.json';

function App() {
  const [apihits, setApihits] = useState(53);
  const [isplist, setIsplist] = useState(data);

  return (
    <>
      <Header total={isplist.length} apihits={apihits} />
      <Main isplist={isplist} />
    </>
  );
}

export default App;
