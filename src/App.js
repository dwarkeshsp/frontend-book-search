import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Storage } from "./firebaseConfig";

import "./App.css";

// TODO: add pdf, txt
const fileTypes = ["EPUB"];

export default function App() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="App">
      <h1>Book Search</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}
