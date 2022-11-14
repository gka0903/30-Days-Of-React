// index.js
import React from 'react'
import styled from 'styled-components'

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const HexaColor = styled.div`
  width: 100%;
  height: 100px;
  color:white;
  padding: 10px;
  margin: 10px;
  border-radius: 50px;
  background-color:${hexaColor};
`;
const App = () => {
    return(
        <Maindiv>
            <HexaColor>{hexaColor()}</HexaColor>
            <HexaColor>{hexaColor()}</HexaColor>
            <HexaColor>{hexaColor()}</HexaColor>
            <HexaColor>{hexaColor()}</HexaColor>
            <HexaColor>{hexaColor()}</HexaColor>
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
