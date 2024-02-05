import React from 'react';

const div = ({ imageData }) => {
  return (
    <div>
      {
        imageData.map(i => (
          <div key={i.id} className="column">
            <img src={i.img} />
          </div>
        ))
      }
    </div>
  );
};

export default div;