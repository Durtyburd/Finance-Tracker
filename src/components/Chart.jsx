import { PieChart } from "react-minimal-pie-chart";

function Chart(props) {
  const colors = ["#E38627", "#C13C37", "#6A2135", "#4CAF50", "#2196F3"];
  const descriptionPrice = props.obj;
  const data = Object.entries(descriptionPrice)
    .map(([key, value], index) => ({
      title: key,
      value: value,
      color: colors[index % colors.length],
    }))
    .filter((item) => !Number.isNaN(item.value));
  return (
    <PieChart
      data={data}
      style={{ height: "220px" }}
      label={({ dataEntry }) => dataEntry.title + dataEntry.value}
      labelStyle={{ fontSize: "5px" }}
    />
  );
}

export default Chart;
