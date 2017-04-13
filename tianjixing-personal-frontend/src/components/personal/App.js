import React, {PureComponent} from 'react'
import Alert from 'react-s-alert'
import {Style} from 'radium'
import sanitize from 'radium-sanitize'

import Input from './Input'


import ResultPage from './ResultPage'

export default class extends PureComponent {

  constructor() {
    super();
    this.state = {
      input: true,
      aspects: [
        {title: 'character', display: '性格'},
        {title: 'future', display: '前程'},
        {title: 'fortune', display: '运势'},
        {title: 'opportunity', display: '机会'},
        {title: 'wealth', display: '生财'},
        {title: 'deposit', display: '守财'},
        {title: 'marriage', display: '婚姻'},
      ].map(a => ({
        ...a,
        image: require(`./images/${a.title}.png`),
        result: '',
      })),
    }
  }

  submit = ({lastName, firstName, dob, gender, region}) => {

    if (!lastName || !firstName || !dob || !gender || !region){
    	 Alert.warning('<h2>请完整的填写您的信息,才能准确的完成测试呦!</h2>', {
        position: 'top',
        html: true
      });
      return
    }
      const reg = /^[\u4E00-\u9FA5]{1,9}$/;

    if (!reg.test(lastName) || !reg.test(firstName)) {
    	 Alert.warning('<h2>请输入正确的中文姓名!</h2>', {
        position: 'top',
        html: true
      });
      return
    }

    fetch('http://1hu9lai.cn:8280/api/heluo/personal', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: {
          lastName,
          firstName
        },
        dob,
        gender,
        region: {type: region},

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
          aspects: this.state.aspects.map(a => ({
            ...a,
            result: data[a.title],
          }))
        })
      })
  }

  history = ({lastName, firstName, dob, gender, region}) => {

    fetch('http://1hu9lai.cn:8280/api/heluo/personal', {
		  method: "POST",
		  headers: {
		    'Content-Type': 'application/json',
		    'Accept': 'application/json',
		  },
		  body: JSON.stringify({
		      "name": {
		      	"firstName": lastName,
		        "lastName": firstName
		       },
		      "dob": dob,
		      "gender": gender,
		      "region": {"type": region, "name": "a", "birthYear": 2016}
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
		        aspects: this.state.aspects.map(a => ({
		          ...a,
		          result: data[a.title],
		        }))
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
    fontFamily: 'arial, "\\5FAE\\8F6F\\96C5\\9ED1"',
    backgroundColor: '#f9f1f1',
  },
}
