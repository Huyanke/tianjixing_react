import React, {PureComponent} from 'react'
import Radium from '../../configuredRadium'


export default Radium(class extends PureComponent {
	handleHistory = () => {
		this.props.handleHistory({
		  "male": {
	        "firstName": this.props.femaleLastName,
	        "lastName":  this.props.femaleFirstName
	      },
	      "female": {
	        "firstName": this.props.maleLastName,
	        "lastName":  this.props.maleFirstName
	      }
		})
	}

  render() {
  	return (
      <p style={styles.list}  onClick={this.handleHistory}>
        <span style={styles.name}>{this.props.femaleLastName + this.props.femaleFirstName}</span>
        <span style={styles.dates}>{this.props.maleLastName + this.props.maleFirstName}</span>
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