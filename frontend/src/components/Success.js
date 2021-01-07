import React from 'react'

function Success(props){
    return(
        <div className="container">
            <img src={props.imageURL} alt="Uploaded Image"/>
            <p>Sucesso!!</p>
        </div>
    )
}

export default Success;