import React, { useState } from 'react'
import { render } from 'react-dom'
import Uploader from './Uploader'
import SendFile from './SendFile'
import Success from './Success'

function App(){
    const [file, setFile] = useState(null)
    const [success, setSuccess] = useState(false)
    const [imageURL, setImageURL] = useState(false)

    const handleFile = (file) => {
        setFile(file)
    }

    const handleSuccess = (success, url) => {
        setSuccess(success)
        setImageURL(url);
    }

    const renderUploader = () => {
       return <Uploader handleFile={handleFile}/>
    }

    const renderSendFile = () => {
        return <SendFile file={file} handleFile={handleFile} handleSuccess={handleSuccess}/>
    }

    const renderSuccess = () => {
        return <Success imageURL={imageURL}/>
    }

    const show = () => {
        if (!file && !success){
            return renderUploader();
        } else if (file && !success){
            return renderSendFile();
        } else {
            return renderSuccess();
        }
    }

    return(
        <div className="app">
            {show()}
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv);