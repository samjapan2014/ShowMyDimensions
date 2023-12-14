import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';

function PhotoEditor() {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = (image) => {
    // You can perform additional actions when the image is loaded
  };

  const onCropComplete = (crop) => {
    // You can perform actions after the crop is completed
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} />
      {src && (
        <ReactCrop
          src={src}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={onCropChange}
        />
      )}
    </div>
  );
}

export default PhotoEditor;
