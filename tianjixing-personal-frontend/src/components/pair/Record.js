import React, {PureComponent} from 'react'
import Radium from '../../configuredRadium'

import RecordList from './RecordList'

export default Radium(class extends PureComponent {
  constructor() {
  	super()
  	this.state = {
      record: true
  	}
  }
  handleClick = () => {
    this.setState({record: false})
  }

  historyRecord = ({male, female}) => {
    this.props.historyRecord({
	    male: male,
	    female: female
    })
  }

  render() {
    const hide = {
      display: 'none'
    };
    return (
      <div style={[styles.record, this.state.record ? false : hide]}>
        <div style={styles.recordInfo}>
           <h2 style={styles.title}>历史记录</h2>
           <span onClick={this.handleClick} style={styles.close}>×</span>
            {
              this.props.historys.map((item,index) =>
                <RecordList key={index} {...item}  handleHistory={this.historyRecord}/>)
	          }
        </div>
      </div>
    )
   }
})


const styles = {
  record: {
  	position: 'absolute',
    top: '0',
    left: '0',
  	width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  recordInfo: {
  	position: 'relative',
  	margin: '0 auto',
  	width: '65%',
  	height: '75%',
  	marginTop:'12%',
  	padding: '0 5%',
  	overflow: 'scroll',
  	backgroundImage: `url(${require('./images/record_bg.png')})`,
    backgroundSize: '100% 100%',
    borderRadius: '0.3rem',
  },
  title: {
  	paddingTop: '0.5rem',
  	color: '#cd5045',
  	textAlign: 'center',
  },
  close: {
  	position: 'absolute',
    top: '0.2rem',
    right: '0.5rem',
    fontSize: '2rem',
    WebkitTapHighlightColor: 'transparent',
  },
  list: {
  	fontSize: '1.4rem',
  	clear: 'both',
  },
  name: {
  	float: 'left',
  },
  dates: {
  	float: 'right',
  }
}
