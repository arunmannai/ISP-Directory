import { useState } from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import { Isp } from './types';

function Main(props:{isplist:Isp[]}) {
  const [selectedItem, setSelectedItem] = useState<Isp>(props.isplist[0]);
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
