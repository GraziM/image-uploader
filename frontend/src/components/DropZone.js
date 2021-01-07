import React from 'react'

function DropZone(props){

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
    }

    const handleDragLeave = (e) => {
        e.preventDefault();

    }

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0){
            if(!props.validator(files[0])){
                props.error("Invalid file type")
            } else {
                props.handleFile(files[0])
            }
        }
    }

    return (
        <div className="drop-zone"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragleave={handleDragLeave}
            onDrop={handleDrop}
        >
        </div>
    )
}

export default DropZone;