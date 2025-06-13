"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";
import { useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);

  const imageInput = useRef();

  function handelPickClick() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image chosen</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked Image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg, image/jpg"
          required
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handelPickClick}
        >
          {!pickedImage && "Select Image"}
          {pickedImage && "Select a different Image"}
        </button>
        {/* <span className={classes.filename}>No file chosen</span> */}
      </div>
    </div>
  );
}
