import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="app">
      <h1>Retinal AI</h1>

      <p>AI-Powered Retinal Analysis</p>

      <p>
        Upload a retinal fundus image to analyze vessels,
        diabetic retinopathy, and retinal lesions.
      </p>

      <div className="models">
        <div className="model-card">
          <h2>U-Net</h2>
          <p>Retinal Vessel Segmentation</p>
        </div>

        <div className="model-card">
          <h2>ResNet</h2>
          <p>Diabetic Retinopathy Classification</p>
        </div>

        <div className="model-card">
          <h2>YOLO</h2>
          <p>Retinal Lesion Detection</p>
        </div>
      </div>

      <div className="upload-section">
        <h2>Upload Retinal Image</h2>

        <input
          type="file"
          accept="image/*"
          onChange={(event) => setImage(event.target.files[0])}
        />
      </div>

      {image && (
        <div>
          <h2>Selected Image</h2>

          <img
            src={URL.createObjectURL(image)}
            alt="Retinal"
            width="400"
          />
        </div>
      )}

      {image && (
  <div>
    <h2>Selected Image</h2>

    <img
      src={URL.createObjectURL(image)}
      alt="Retinal"
      width="400"
    />
  </div>
)}

{image && (
  <div className="results">
    <h2>Analysis Results</h2>

    <div className="result-card">
      <h3>U-Net</h3>
      <p>Vessel segmentation result will appear here.</p>
    </div>

    <div className="result-card">
      <h3>ResNet</h3>
      <p>Diabetic retinopathy classification result will appear here.</p>
    </div>

    <div className="result-card">
      <h3>YOLO</h3>
      <p>Retinal lesion detection result will appear here.</p>
    </div>

    <button>Analyze Image</button>
  </div>
)}
    </div>
  );
}

export default App;