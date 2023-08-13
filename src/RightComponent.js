import React from 'react';

function RightComponent(props) {
  return (
    <div className="col-sm-5">
      <div>{props.isp.name}</div>
      <div>{props.isp.lowest_price}</div>
      <div>{props.isp.rating}</div>
      <div>{props.isp.max_speed}</div>
      <div>{props.isp.description}</div>
      <div>{props.isp.contact_no}</div>
      <div>{props.isp.email}</div>
      <div>{props.isp.image}</div>
      <div>{props.isp.url}</div>
    </div>
  );
}

export default RightComponent;
