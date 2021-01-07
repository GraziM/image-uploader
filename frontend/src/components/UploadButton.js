import React from 'react'

function UploadButton(props){

    const handleChange = (e) => {
        props.handleFile(e.target.files[0]);
    }

    return(
        <form className="Upload-form">
            <label htmlFor="file">Choose a file</label>
            <input type="file" onChange={handleChange} className="Upload-input" name="file" id="file"/>
        </form>
    )
}

export default UploadButton;