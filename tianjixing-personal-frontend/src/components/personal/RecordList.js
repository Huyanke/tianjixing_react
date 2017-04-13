import React, {PureComponent} from 'react'
import Radium from '../../configuredRadium'


export default Radium(class extends PureComponent {

  handleHistory = () => {
	this.props.handleHistory({
	  lastNames: this.props.lastName,
      firstNames: this.props.firstName,
      dobs: this.props.dob,
      genders: this.props.gender,
      regions: this.props.regionType,
	})
  }

  render() {
  	return (
      <p style={styles.list}  onClick={this.handleHistory}>
        <span style={styles.name}>{this.props.firstName + this.props.lastName}</span>
        <span style={styles.dates}>{this.props.dob}</span>
      </p>
  	)
  }
})


const styles = {
  list: {
  	height: '1.5rem',
  	fontSize: '1.4rem',
  	margin: '0',
  	clear: 'both',
  },
  name: {
  	float: 'left',
  },
  dates: {
  	float: 'right',
  }
}