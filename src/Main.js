import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

function Main(props) {
  return (
    <div className="mainbg">
      <LeftComponent isplist={props.isplist} />
      <RightComponent />
    </div>
  );
}

export default Main;
