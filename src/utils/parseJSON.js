function parseJSON(file, setter) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const parsed = JSON.parse(event.target.result);
    setter(parsed.transactions);
  };
  reader.readAsText(file);
}

export default parseJSON;
