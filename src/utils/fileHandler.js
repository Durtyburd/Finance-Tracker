function fileHandler(e, fileSetter, isFileUploaded) {
  e.preventDefault();
  if (e.target.files) {
    fileSetter(e.target.files[0]);
    isFileUploaded(true);
  }
}

export default fileHandler;
