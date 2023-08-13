import React, { useState } from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

function Main(props) {
  const [selectedItem, setSelectedItem] = useState(props.isplist[0]);
  return (
    <div className="container-fluid">
    <div className="row">
      <LeftComponent
        isplist={props.isplist}
        setSelectedItem={setSelectedItem}
      />
      <RightComponent isp={selectedItem} />
    </div></div>
  );
}

export default Main;
