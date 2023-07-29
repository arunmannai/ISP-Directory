import React from 'react';

function Counter(props) {
  return (
    <div>
      Total ISP: {props.total} | API Hits: {props.apihits}
    </div>
  );
}

export default Counter;
