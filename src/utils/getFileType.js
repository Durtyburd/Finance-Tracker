function getFileType(file) {
  if (!file) {
    alert("Please select a NFCU .csv file.");
    return;
  }
  return file.type;
}

export default getFileType;
