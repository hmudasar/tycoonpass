import React, { useState } from "react";

const CardImage = ({ images, selectedImage, onSelect }: any) => {
  //   const handleSelect = (image: any) => {
  //     setSelectedImage(image);
  //     onSelect(image);
  //     console.log(image, "image");
  //   };
  console.log(selectedImage, "selectedImage");
  return (
    <div className="image-container">
      <h2>Select Card</h2>
      <div className="row">
        {images &&
          images.map((image: any, index: any) => (
            <div className="col-6 col-md-3" key={index}>
              <div
                className={`single-image ${
                  selectedImage && selectedImage.url === image.url
                    ? "selected"
                    : ""
                }`}
                onClick={() => onSelect(image)}
              >
                <img src={image.url} alt={image.alt} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardImage;
