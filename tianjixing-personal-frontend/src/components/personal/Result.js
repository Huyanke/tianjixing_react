import React from 'react'
import {Element} from 'react-scroll'
import Radium from '../../configuredRadium'

export default Radium(({title, display, image, result, last}) =>
    <Element name={title}>
      <div style={[styles.container, last && styles.last]}>
        <h2 style={styles.title}>
          <img src={image} alt={display} style={styles.img}/>
        </h2>
        {result && result.split('\r\n').map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </Element>
)

const styles = {
  container: {
    overflow: 'auto',
  },
  last: {
    minHeight: 'calc(100vh - 5.4rem)',
  },
  title: {
    margin: 0,
    paddingTop: '1rem',
  },
  img: {
    width: '100%',
  },
}
