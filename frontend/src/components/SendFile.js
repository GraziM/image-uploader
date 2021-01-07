import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SendFile(props){
    const [progress, setProgress] = useState(0);

    const sendFile = () => {
        let formData = new FormData();
        formData.append('image', props.file, props.file.name);
        let url = './api/images/'
        let config = {
            headers: {'content-type': 'multipart/form-data'},
            onUploadProgress: progressEvent => {
                let percent = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percent)
            }
        }
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response)
                props.handleFile(null);
                props.handleSuccess(true, response.data.image);
            })
            .catch((err) => {
                console.log(`Houve um ERRO: ${err}`)
            })
    }

    useEffect(sendFile, []);

    return(
        
        <div>
            <progress value={progress} max="100"/>
        </div>
    )

}

export default SendFile;