import React from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";

//Adding comment to App.js
const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-4">File Upload</h4>

    <FileUpload />
  </div>
);

export default App;
