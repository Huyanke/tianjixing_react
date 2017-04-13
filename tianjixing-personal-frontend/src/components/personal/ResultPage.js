import React from 'react'

import Results from './Results'
import Navigation from './Navigation'
import Again from '../common/Again'

export default ({aspects, navigation, onAgain}) =>
    <div>
      <Results aspects={aspects}/>
      <Navigation aspects={aspects}/>
      <Again navigation={true} onAgain={onAgain} />
    </div>

