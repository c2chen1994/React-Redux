import React from "react";

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <li key={image.id}>
        <img src={image.urls.regular} />
      </li>
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
