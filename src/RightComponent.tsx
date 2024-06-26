import { Isp } from "./types";

function RightComponent(props:{isp:Isp}) {
  return (
    <div className="col-sm-5">
      <div className="row">
        <div className="col-sm-4 p-3">
          <img src={props.isp.image} alt={props.isp.name}></img>
        </div>
        <div className="col-sm-8 p-3">
          <div className="border border-dark infobox">
            <div className="p-1 text-center bg-secondary text-white">{props.isp.name}</div>
            <div className="p-1">Max. Speed: {props.isp.max_speed}</div>
            <div className="p-1">{props.isp.contact_no}</div>
            <div className="p-1">{props.isp.email}</div>
            <div className="p-1">Min. Plan: &#8377;{props.isp.lowest_price} /-</div>
          </div>
        </div>
      </div>
         
      <div className="description border border-dark px-1 pt-2 pb-3" dangerouslySetInnerHTML={{ __html: props.isp.description}}></div>
      <div className="text-center mt-3">
      <a href={props.isp.url} target="_blank" rel="noreferrer" className="btn btn-outline-success">Link</a>
      </div>
    </div>
  );
}

export default RightComponent;
