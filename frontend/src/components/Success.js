import React from 'react'

function Success(props){
    let path = window.location.href;
    path = path.slice(0,path.length - 1)
    const imageURL = path + props.imageURL;

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = document.getElementById('urlClipboard');
        url.select();
        url.setSelectionRange(0, 99999);
        document.execCommand('copy');
    }

    return(
        <div className="container">
            <i className="material-icons md-24 success">check_circle</i>
            <h6>Uploaded Successfully!</h6>
            <img src={props.imageURL} alt="Uploaded Image"/>
            <form onSubmit={handleSubmit} className="success-form">
                <input type="text" value={imageURL} id="urlClipboard"/>
                <button className="button" type="submit">Copy Link</button>
            </form>
        </div>
    )
}

export default Success;