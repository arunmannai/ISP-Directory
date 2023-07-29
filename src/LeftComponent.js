import React from 'react';

function LeftComponent(props) {
  return (
    <div className="leftcom">
      {props.isplist.map((item) => (
        <div className="ispitem" onClick={() => props.setSelectedItem(item)}>
          <span>{item.name}</span>
          <span>&#x20B9; {item.lowest_price}</span>
        </div>
      ))}
    </div>
  );
}

export default LeftComponent;
