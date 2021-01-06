import React from 'react'
import { render } from 'react-dom'
import Uploader from './Uploader'

function App(){
    return(
        <div className="app">
            <Uploader />
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv);