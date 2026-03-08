import formattedDescription from "./formatDescription";

function calculatePercentage(list) {
  const descriptionPrice = {};
  let totalExpenses = 0;
  for (let i = 0; i < list.length; i++) {
    const description = formattedDescription(list[i].description);
    const amount = Number(list[i].amount);
    if (amount < 0) {
      const positiveAmount = amount * -1;
      totalExpenses += positiveAmount;
      if (description in descriptionPrice) {
        descriptionPrice[description] += positiveAmount;
      } else {
        descriptionPrice[description] = positiveAmount;
      }
    }
  }

  const percentages = {};
  for (const description in descriptionPrice) {
    percentages[description] = Number(
      ((descriptionPrice[description] / totalExpenses) * 100).toFixed(2),
    );
  }
  return percentages;
}

export default calculatePercentage;
