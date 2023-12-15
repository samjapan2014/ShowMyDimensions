import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PhotoEditor from './PhotoEditor'; 
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(files.concat(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))));
    }
  });

  const handleThumbnailClick = (imageSrc, index) => {
    setSelectedImage(imageSrc); // Update the selected image
    setCurrentIndex(index); // Update the current index
  };

  const nextImage = () => {
    if (currentIndex < files.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(files[newIndex].preview);
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(files[newIndex].preview);
    }
  };

  const thumbnails = files.map((file, index) => (
    <div key={index} className="thumbnail" onClick={() => handleThumbnailClick(file.preview, index)}>
      <img src={file.preview} alt={`preview ${index}`} />
    </div>
  ));

  return (
    <div className="App">
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className="image-display">
         {/* {selectedImage && <img src={selectedImage} alt="Selected" />} */}
         {<PhotoEditor selectedImage={selectedImage}/>}
      </div>
      <div className="thumbnail-row">
        <button className="arrow left-arrow" onClick={previousImage}>{"<"}</button>
        <div className="thumbnails">
          {thumbnails}
        </div>
        <button className="arrow right-arrow" onClick={nextImage}>{">"}</button>
      </div>
    </div>
  );
}

export default App;
