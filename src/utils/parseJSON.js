function parseJSON(e, file, setter) {
  e.preventDefault();
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const parsed = JSON.parse(event.target.result);
    setter(parsed.transactions); // assuming your JSON has { transactions: [...] }
  };
  reader.readAsText(file);
}

export default parseJSON;
