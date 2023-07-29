import React from 'react';
import Counter from './Counter';

function Header(props) {
  return (
    <div>
      Header
      <Counter total={props.total} apihits={props.apihits} />
    </div>
  );
}

export default Header;
