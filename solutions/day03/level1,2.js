// index.js
import React from 'react'
import css_logo from './images/css_logo.png'
import html_logo from './images/html_logo.png'
import js_logo from './images/js_logo.png'
import styled from 'styled-components'

// JSX element, header

const Image = () => (
    <div className='img'>
        <img width={250} height={250} src = {css_logo}/>
        <img width={250} height={250} src ={html_logo}/>
        <img width={250} height={250} src ={js_logo}/>
    </div>
)

const Block = () =>{
    return(
        <div>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to recieve news and updates</p>
            <input placeholder='First name'></input>
            <input placeholder='Last name'></input>
            <input placeholder='Email'></input>
        </div>
    )
}

const ReactLarge = props => {
    return <h1>{props.children}</h1>
}

// JSX element, app
const App = () => {
    return(
        <Maindiv>
            <Image />
            <Block />
            <ReactLarge>Why</ReactLarge>
        </Maindiv>
    )
}

const Maindiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export default App;
