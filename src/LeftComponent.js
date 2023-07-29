import React from 'react';

function LeftComponent(props) {
  return (
    <ol>
      {props.isplist.map((item) => (
        <li>
          <div>
            <span>{item.name}</span>
            <span>{item.lowest_price}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default LeftComponent;
