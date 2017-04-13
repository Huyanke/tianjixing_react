import React from 'react'

import Score from './Score'
import Result from './Result'
import Again from '../common/Again'

export default ({aspects, onAgain}) =>
    <div style={styles.result}>
      <div style={styles.resultInfo}>
          <Score  aspects={aspects}/>
          <Result aspects={aspects}/>
          <Again onAgain={onAgain}/>
      </div>
    </div>

const styles = {
  result: {
	width: '100%',
	backgroundImage: `url(${require(`./images/resultpage_bg.png`)})`,
    backgroundSize: '100%',
  },
  resultInfo: {
  	margin: '0 auto',
    width: '85%',
	paddingTop: '74%',
  },

}
