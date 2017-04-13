import React from 'react'
import Radium from '../../configuredRadium'

export default Radium(({navigation = false, onAgain}) =>
    <img src={require(`./images/again.png`)} alt="重新测试"
         style={[style, navigation && {bottom: '5.5rem'}]} onClick={onAgain}/>
)

const style = {
  position: 'fixed',
  width: '4.1rem',
  bottom: 0,
  height: '6.25rem',
  right: 0,
}
