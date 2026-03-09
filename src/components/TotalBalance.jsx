import "../styles/TotalBalance.css";

function TotalBalance(props) {
  const totalBalance = props.amount;
  return (
    <div className="card">
      <h3>Total Balance: {totalBalance}</h3>
    </div>
  );
}

export default TotalBalance;
