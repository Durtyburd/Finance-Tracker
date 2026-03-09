import "../styles/TotalExpense.css";

function TotalExpense(props) {
  const TotalExpense = props.amount;
  return (
    <div className="card">
      <h3 className="expense">Total Expense: {TotalExpense}</h3>
    </div>
  );
}

export default TotalExpense;
