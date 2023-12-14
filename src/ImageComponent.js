import React, { useState } from 'react';
import { useNode } from '@craftjs/core';

const ImageComponent = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  const [imageSrc, setImageSrc] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div ref={(ref) => connect(drag(ref))} style={{ margin: '10px', cursor: 'move' }}>
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" style={{ width: '100%', height: 'auto' }} />
      ) : (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      )}
    </div>
  );
};
