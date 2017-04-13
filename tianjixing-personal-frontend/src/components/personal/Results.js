import React from 'react'
import Radium from '../../configuredRadium'

import Result from './Result'

export default Radium(({aspects}) =>
    <div style={styles.background}>
      <div style={styles.container}>
        {aspects.map((a, i) =>
            <Result key={a.title} {...a} last={i === aspects.length - 1}/>)}
      </div>
    </div>
)

const styles = {
  background: {
    paddingTop: '92%',
    backgroundImage: `url(${require('./images/results_bg.png')})`,
    backgroundSize: '100%',
  },
  container: {
    margin: '0 auto',
    width: '88%',
    padding: '0 1.55rem 5.5rem 1.55rem',
    fontSize: '1.3rem',
    borderLeft: '0.175rem solid #dc6758',
    borderRight: '0.175rem solid #dc6758',
  },
}
