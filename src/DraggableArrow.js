import React, { useRef } from 'react';

const DraggableArrow = ({ src }) => {
  const arrowRef = useRef(null);

  const handleDragStart = (e) => {
    const rect = arrowRef.current.getBoundingClientRect();
    e.dataTransfer.setData('text/plain', JSON.stringify({ id: 'arrow', x: e.clientX - rect.x, y: e.clientY - rect.y }));
  };

  return (
    <img ref={arrowRef} src={src} draggable="true" onDragStart={handleDragStart} style={{ width: '50px', cursor: 'move', position: 'absolute' }} alt="Draggable arrow" />
  );
};

export default DraggableArrow;
