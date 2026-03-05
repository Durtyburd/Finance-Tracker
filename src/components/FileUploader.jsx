import { useState } from "react";
import fileHandler from "../utils/fileHandler";

function FileUploader() {
  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  return (
    <>
      <form action="" method="get" encType="multipart/form-data">
        <label>Bank Statement</label>
        <input
          type="file"
          name="bank-statement"
          onChange={(e) => {
            fileHandler(e, setFile, setFileUploaded);
          }}
        />
        <button>Submit</button>
      </form>
      <h1>{fileUploaded && file.name}</h1>
    </>
  );
}

export default FileUploader;
