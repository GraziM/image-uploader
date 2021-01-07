import React from 'react'

function DropZone(props){

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
        console.log()
        e.target.classList.add("hover")
    }

    const handleDragExit = (e) => {
        e.preventDefault();
        console.log(e)
        e.target.classList.remove("hover")
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        console.log(e)
        e.target.classList.remove("hover")
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length > 0){
            if(!props.validator(files[0])){
                props.error(true)
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
            onDragExit={handleDragExit}
            onDrop={handleDrop}
        >
            <i className="material-icons">get_app</i>
            <p className="drop-text">Choose a file or drag it here</p>
        </div>
    )
}

export default DropZone;