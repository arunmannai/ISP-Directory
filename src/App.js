import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';

function App() {
  const [total, setTotal] = useState(9);
  const [apihits, setApihits] = useState(53);

  return (
    <div>
      <Header total={total} apihits={apihits} />
      <Main />
    </div>
  );
}

export default App;
