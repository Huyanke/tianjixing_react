import React, {PureComponent} from 'react'
import Radium from '../../configuredRadium'

export default Radium(({aspects}) =>

      <div style={styles.ResultInfo}>
        <div style={styles.bgTop}></div>
        <div style={styles.textInfo}>
          <h2 style={styles.InfoTitle}>特别适合结婚的</h2>
          {
          	aspects.description.split('\r\n').map((item, index) => <p key={index}>{item}</p>)
          }
        </div>
        <div style={styles.bgBottom}></div>
      </div>
     )

const styles = {
	ResultInfo: {
		marginTop: '2.5rem',
		},
	bgTop: {
		width: '100%',
		height: '8rem',
		backgroundImage: `url(${require(`./images/result_topbg.png`)})`,
	  backgroundSize: '100%',
  },
  textInfo: {
  	margin: '0 auto',
  	fontSize: '1.3rem',
	  width: '97.4%',
	  padding: '0 1.7rem 4rem 2rem',
	  marginTop: '-2.7rem',
	  borderLeft: '0.3rem solid #cd5045',
	  borderRight: '0.3rem solid #cd5045',
  },
  InfoTitle: {
  	marginTop: '-5.8rem',
	  textAlign: 'center',
  },
  bgBottom: {
		width: '100%',
		height: '5rem',
		marginTop: '-2.3rem',
		backgroundImage: `url(${require(`./images/result_bottombg.png`)})`,
		backgroundSize: '100%',
  },
}