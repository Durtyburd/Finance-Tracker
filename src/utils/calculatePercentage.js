function calculatePercentage(list) {
  const descriptionPrice = {};
  for (let i = 0; i < list.length; i++) {
    if (list[i].description in descriptionPrice) {
      descriptionPrice[list[i].description] += Number(list[i].amount);
    } else {
      descriptionPrice[list[i].description] = Number(list[i].amount * -1);
    }
  }
  return descriptionPrice;
}

export default calculatePercentage;
