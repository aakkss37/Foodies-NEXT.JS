"use client"
import { useRef, useState } from 'react'
import classes from './imagePicker.module.css'
import Image from 'next/image';


const ImagePicker = ({ label, name }) => {
    const imageInputRef = useRef();
    const [pickedImage, setPickedImage] = useState();
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        };
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor='image'>
                {label}
            </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {
                        !pickedImage ?
                            <p>No image picked yet</p>
                            : <Image src={pickedImage} alt='Picked Image' fill />
                    }
                </div>
                <input
                    className={classes.input}
                    type='file'
                    id='image'
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    requiredF
                />
                <button
                    className={classes.button}
                    type='button'
                    onClick={() => imageInputRef.current.click()}
                >
                    Pick an image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker