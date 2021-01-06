import React, { useState } from 'react'

function UploadButton(){
    const [file, setFile] = useState(null)

    const handleChange = () => {

    }

    return(
        <form className="Upload-form">
            <label htmlFor="file">Choose a file</label>
            <input type="file" onChange={handleChange} className="Upload-input" name="file" id="file"/>
        </form>
    )
}

export default UploadButton;