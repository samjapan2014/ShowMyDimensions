import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const PhotoEditor = ({ selectedImage }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize the Fabric canvas
    const canvas = new fabric.Canvas(canvasRef.current);

    // Load and set the background image
    fabric.Image.fromURL(selectedImage, function(img) {
      // Optionally, set options for the background image
      img.set({
        scaleX: canvas.width / img.width,
        scaleY: canvas.height / img.height,
      });

      // Set the image as canvas background
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });

    // Clean up
    return () => {
      canvas.dispose();
    };
  }, [selectedImage]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default PhotoEditor;
