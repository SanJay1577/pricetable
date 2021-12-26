export function Planlist(props) {
  const styles = { opacity: "0.7" };
  return (
    <div className="planCard">
      <div className="plan-header">
        <h5 style={styles}>{props.plan}</h5>
        <h1>${props.price}<small>/month</small></h1>
        <hr />
      </div>
      <div className="plan-main">
        <p>{props.acces1} {props.feature1}</p>
        <p>{props.acces2} {props.feature2}</p>
        <p>{props.acces3} {props.feature3}</p>
        <p>{props.acces4} {props.feature4}</p>
        <p>{props.acces5} {props.feature5}</p>
        <p>{props.acces6} {props.feature6}</p>
        <p>{props.acces7} {props.feature7}</p>
        <p>{props.acces8} {props.feature8}</p>
      </div>
      <div className="plan-footer">
        <button>BUTTON</button>
      </div>
    </div>
  );
}
