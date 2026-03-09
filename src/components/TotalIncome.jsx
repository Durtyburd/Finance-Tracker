import "../styles/TotalIncome.css";

function TotalIncome(props) {
  const totalIncome = props.amount;
  return (
    <div className="card">
      <h3 className="income">Total Income: {totalIncome}</h3>
    </div>
  );
}

export default TotalIncome;
