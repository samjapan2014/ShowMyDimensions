import React, { useState, useCallback } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      onImageUpload(file);
    }
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop} style={{ width: '100%', height: '300px', border: '2px dashed #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Drag and drop an image here
    </div>
  );
};

export default ImageUpload;
