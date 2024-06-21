function Counter(props:{apihits:number,total:number}) {
  return (
    <div className="counter">
      Total ISP: {props.total} | API Hits: {props.apihits}
    </div>
  );
}

export default Counter;
