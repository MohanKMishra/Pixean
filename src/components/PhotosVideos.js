import { useState } from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import "./PhotosVideos.css";

const PhotosVideos = () => {
  const [isPhoto, setIsPhoto] = useState(true);
  return (
    <div className="photosvideos_wrapper">
      <div onClick={() => setIsPhoto(true)} className="photosvideos">
        <div
          className={
            isPhoto ? "photosvideos_text_selected" : "photosvideos_text"
          }
        >
          Photos
        </div>
        <div className={isPhoto ? "underline_selected" : "underline"}></div>
      </div>
      <div onClick={() => setIsPhoto(false)} className="photosvideos">
        <div
          className={
            !isPhoto ? "photosvideos_text_selected" : "photosvideos_text"
          }
        >
          Videos
        </div>
        <div className={!isPhoto ? "underline_selected" : "underline"}></div>
      </div>
    </div>
  );
};

export default PhotosVideos;
