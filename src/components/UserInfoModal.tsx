import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CardImage from "./CardImage";
import InfoForm from "./InfoForm";

const UserInfoModal = ({ showModal, handleCloseModal }: any) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { url: "/images/card-1.jpg", alt: "Image 1" },
    { url: "/images/card-2.jpg", alt: "Image 2" },
    { url: "/images/card-3.jpg", alt: "Image 3" },
    { url: "/images/card-4.jpg", alt: "Image 4" },
  ];
  const handleImageSelect = (image: any) => {
    setSelectedImage(image);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {currentStep === 1 && (
          <CardImage
            images={images}
            selectedImage={selectedImage}
            onSelect={handleImageSelect}
          />
        )}
        {currentStep === 2 && <InfoForm />}
        {/* Add more FormStep components for additional steps */}
        {selectedImage && currentStep === 1 ? (
          <div className="d-flex justify-content-end mt-3">
            <button onClick={handleNext} className="btn btn-info">
              Next
            </button>
          </div>
        ) : null}
        {currentStep > 1 ? (
          <div className="d-flex justify-content-between">
            <button
              onClick={handlePrevious}
              className="btn btn-default border border-1"
            >
              Previous
            </button>
            <button className="btn btn-success">Submit</button>
          </div>
        ) : null}
      </Modal.Body>
    </Modal>
  );
};

export default UserInfoModal;
