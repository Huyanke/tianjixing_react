import React, {PureComponent} from 'react'
import Alert from 'react-s-alert'
import {Style} from 'radium'
import sanitize from 'radium-sanitize'

import Input from './Input'
import ResultPage from './ResultPage'

export default class extends PureComponent {
  constructor() {
    super()
    this.state = {
      input: true,
    }
  }

  submit = ({male, female}) => {
    const reg = /^[\u4E00-\u9FA5]{1,9}$/;

    if (
    	!reg.test(male.lastName) || !reg.test(male.lastName) ||
    	!reg.test(female.lastName) ||!reg.test(female.firstName)
    	) {
    	 Alert.warning('<h2>请完整的填写中文姓名,才能准确的完成测试呦!</h2>', {
        position: 'top',
        html: true
      });
      return
    }

    fetch('http://www.1hu9lai.cn:8280/api/heluo/pair', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
       "male": {
         "firstName": male.firstName,
         "lastName":  male.lastName
       },
       "female": {
         "firstName": female.firstName,
         "lastName":  female.firstName
       }

      })
    })
        .then(resp => resp.json())
        .then(resp => {

          if (!resp.data)
            return

          const data = resp.data
          console.log(data)
          this.setState({
            input: false,
            aspects: data
          })
        })
  }

  history = ({male, female}) => {

    fetch('http://www.1hu9lai.cn:8280/api/heluo/pair', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
       "male": {
         "firstName": male.firstName,
         "lastName":  male.lastName
       },
       "female": {
         "firstName": female.firstName,
         "lastName":  female.firstName
       }

      })
    })
	    .then(resp => resp.json())
	    .then(resp => {

	      if (!resp.data)
	        return

	      const data = resp.data
	      console.log(data)
	      this.setState({
	        input: false,
	        aspects: data
	      })
	    })
  }
  again = () => this.setState({input: true})

  render() {
    return (
			<div>
			  <Style rules={sanitize}/>
			  <Style rules={style}/>
	          {this.state.input
	          ? <Input onSubmit={this.submit} onHistory={this.history}/>
	          : <ResultPage aspects={this.state.aspects} onAgain={this.again}/>}
	      <Alert stack={true} timeout={3000} />
			</div>
        )
     }
  }

const style = {
  html: {
    backgroundColor: '#f4eded',
    fontFamily: 'arial, "\\5FAE\\8F6F\\96C5\\9ED1"',
  },
}

