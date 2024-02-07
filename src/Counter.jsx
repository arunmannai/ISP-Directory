function Counter(props) {
  return (
    <div className="counter">
      Total ISP: {props.total} | API Hits: {props.apihits}
    </div>
  );
}

export default Counter;
