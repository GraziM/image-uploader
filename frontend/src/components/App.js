import React from 'react'
import { render } from 'react-dom'

function App(){
    return(
        <div>
            Olá :)
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App />, appDiv);