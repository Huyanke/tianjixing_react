import React from 'react'
import {Link} from 'react-scroll'
import Radium from '../../configuredRadium'
import {Style} from 'radium'

export default Radium(({aspects}) =>
    <nav style={styles.nav}>
      <Style rules={style}/>
      <ul style={styles.ul}>
        {aspects.map((a, i) =>
            <li key={a.title}
                style={[styles.li, i === aspects.length - 1 && styles.lastLi]}>
              <Link activeClass="active" to={a.title} spy={true} smooth={true}
                    duration={500} isDynamic={true}>{a.display}</Link>
            </li>)}
      </ul>
    </nav>
)

const style = {
  '.active': {
    display: 'block',
    width: '102%',
    height: '3.8rem',
    color: '#dc6758',
    backgroundColor: 'white',
  },
}

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '5.5rem',
    backgroundColor: '#dc6758',
    backgroundImage: `url(${require('./images/navigation_bg.png')})`,
    backgroundSize: '100%',
  },
  ul: {
    display: 'flex',
    margin: '0.75rem auto',
    width: '88%',
    height: '4rem',
    paddingLeft: 0,
    border: '0.15rem solid white',
  },
  li: {
    flexGrow: 1,
    fontSize: '1.4rem',
    lineHeight: '4rem',
    color: 'white',
    textAlign: 'center',
    borderRight: '0.15rem solid white',
  },
  lastLi: {
    borderRight: 0,
  },
}
