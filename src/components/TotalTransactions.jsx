import "../styles/TotalTransactions.css";

function TotalTransactions(props) {
  return (
    <>
      <div className="card">
        <h3>Total transactions: {props.amountOfTransactions}</h3>
      </div>
    </>
  );
}

export default TotalTransactions;
