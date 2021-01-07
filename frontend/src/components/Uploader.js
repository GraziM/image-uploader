import React, { useState } from 'react'
import DropZone from './DropZone'
import UploadButton from './UploadButton'

function Uploader(props){
    const [error, setError] = useState(null)

    const handleError = (value) => {
        setError(value)
    }

    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

        if (validTypes.indexOf(file.type) === -1){
            return false;
        }
        return true;
    }

    return(
        <div className="container">
            <h2>Upload your image</h2>
            <span>File should be Jpeg, Jpg, Png or Gif</span>
            <p className={error ? "error" : "error hide"}>Invalid file type</p>
            <DropZone validator={validateFile} error={handleError} handleFile={props.handleFile}/>
            <p>or</p>
            <UploadButton validator={validateFile} error={handleError} handleFile={props.handleFile}/>
        </div>
    );
}

export default Uploader;