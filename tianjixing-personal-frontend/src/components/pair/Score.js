import React, {PureComponent} from 'react'
import Radium from '../../configuredRadium'


export default Radium(({aspects}) =>

    <div style={styles.exponent}>
      {[
        {expImg: 'premarital', display: '婚前恋爱指数', score: aspects.loveScore},
        {expImg: 'postmarital', display: '婚后幸福指数', score: aspects.hapinessScore},
      ].map(({expImg, display, score}) =>
        <div>
           <span>
             <img src={require(`./images/${expImg}.png`)} alt={display}
                style={styles.expImg}/>
           </span>
           <span style={styles.expSheet}>
             <span style={[styles.borderLine, styles.normal, {width:''+ score +'%'}]}></span>
             <span style={[styles.borderLine, styles.exceed, {width:''+ (score - 100) +'%'}]}></span>
           </span>
           <span style={styles.expNum}>{score}</span>
        </div>
    )}
	</div>
  )

const styles = {
  exponent: {
    margin: '0 auto',
    width: '96%',
    paddingTop: '1.2rem',
  },
  expImg: {
	width: '7.05rem',
	height: '1.8rem',
  },
  expSheet: {
    position: 'relative',
	margin: '0 0.5rem',
	display: 'inline-block',
	width: '59%',
	height: '0.9rem',
	overflow: 'hidden',
	border: '0.15rem solid #d2cecc',
	borderRadius: '0.3rem',
	boxShadow: '-1px 0.1rem 0.1rem #d2cecc inset',
  },
  borderLine: {
    position: 'absolute',
	top: '0',
	left: '0',
	display: 'inline-block',
	height: '100%',
	borderRadius: '0.2rem',
  },
  normal: {
  	zIndex: '1',
  	backgroundColor: '#cd5045',
  },
  exceed: {
  	zIndex: '2',
    backgroundColor: '#F89E17',
  },
  expNum: {
	display: 'inline-block',
	width: '2.8rem',
	fontWeight: 'bold',
	textAlign: 'right',
  },
}