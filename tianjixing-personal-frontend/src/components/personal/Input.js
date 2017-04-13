import React, {PureComponent} from 'react'
import Radium from '../../configuredRadium'
import {Style} from 'radium'

import Record from './Record'

export default Radium(class extends PureComponent {
  constructor() {
  	super()
	  const ua = window.navigator.userAgent.toLowerCase();
	  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	  	const getCode = (name) => {
	      const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	      const r = window.location.search.substr(1).match(reg);
	      if (r != null) return unescape(r[2]); return null;
	      }
	      const code = getCode("code");
	    if(code == null){
	      self.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9d225739e73bf343&redirect_uri=http://www.1hu9lai.cn/personal/index.html&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect");
	    }
	  }
    type:'text',
  	this.state = {
      record: false
  	}
  }

  handleFocus = () => {
    this.setState({type:'date'})
  }

  onSubmit = () => {
    this.props.onSubmit({
      lastName: this.lastName.value.trim(),
      firstName: this.firstName.value.trim(),
      dob: this.dob.value,
      gender: this.gender.value,
      region: this.region.value,
    })
  }

  onHistory = ({lastName, firstName, dob, gender, region}) => {
     	this.props.onHistory({
    	    lastName: lastName,
	        firstName: firstName,
	        dob: dob,
	        gender: gender,
	        region: region,
    	})
  }

  handleRecord = () => {
  	  const getCode = (name) => {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        const r = window.location.search.substr(1).match(reg);
          if (r != null) return unescape(r[2]); return null;
        }
      const code = getCode("code");
      console.log(code);
	   fetch('http://192.168.99.143:8480/heluo/api/history', {
	      method: "POST",
	      headers: {
	        'Content-Type': 'application/json',
	        'Accept': 'application/json',
	      },
	      body: JSON.stringify({
	        "code": code
	      })
	    })
	      .then(resp => resp.json())
        .then(data => {
        	console.log(data)
	        this.setState({
	        	historys: data
	        })
        })

  	  this.setState({record: !this.state.record})
  }

  render() {
    return (
        <div style={styles.container}>
          <Style rules={style}/>
          <div style={styles.form}>
            <div style={styles.inputBox}>
              <div style={styles.row}>
                <div style={[styles.column, styles.firstColumn]}>
                  <label style={styles.label}>姓</label>
                  <input ref={e => this.lastName = e} type="text"
                         placeholder="您的姓氏" style={styles.input}/>
                </div>
                <div style={styles.column}>
                  <label style={styles.label}>名</label>
                  <input ref={e => this.firstName = e} type="text"
                         placeholder="您的名字" style={styles.input}/>
                </div>
              </div>
              <div style={styles.row}>
                  <label style={styles.label}>生日</label>
                  <input ref={e => this.dob = e} type={this.state.type}
                        onClick={this.handleFocus} placeholder="您的出生年月日"style={styles.input}/>
              </div>
              <div style={styles.row}>
                <label style={styles.label}>性别</label>
                <select ref={e => this.gender = e} style={styles.select}>
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
                <DropdownArrow/>
              </div>
              <div style={[styles.row, styles.lastRow]}>
                <label style={styles.label}>所在地</label>
                <select ref={e => this.region = e} style={styles.select}>
                  <option value="china-mainland">中国大陆</option>
                  <option value="taiwan">台湾</option>
                  <option value="hongkong">香港</option>
                  <option value="macao">澳门</option>
                </select>
                <DropdownArrow/>
              </div>
            </div>
            <div style={styles.btnBox}>
              <button onClick={this.onSubmit} style={styles.btn}>分析</button>
            </div>
            <div onClick={this.handleRecord}  style={styles.record} >历史记录</div>
          </div>
           {
             this.state.record ? <Record historys={this.state.historys} historyRecord={this.onHistory}/> : false
           }
        </div>
    )

  }

})


const style = {
  'select::-ms-expand': {
    display: 'none',
  },
}


const DropdownArrow = () =>
    <img src={require(`./images/dropdown_arrow.png`)} alt="下拉框提示图标"
         style={styles.dropdownArrow}/>

const styles = {
  container: {
    height: '100%',
    backgroundImage: `url(${require('./images/input_bg.png')})`,
    backgroundSize: '100% 100%',
  },
  form: {
    margin: '0 auto',
    width: '80%',
    paddingTop: '82%',
    paddingBottom: '8%',
  },
  inputBox: {
    fontSize: '1.4rem',
    border: '0.15rem solid #dc6758',
  },
  row: {
    position: 'relative',
    height: '4rem',
    borderBottom: '0.15rem solid #dc6758',
  },
  lastRow: {
    borderBottom: 0,
  },
  column: {
    display: 'inline-block',
    width: '50%',
  },
  firstColumn: {
    borderRight: '0.15rem solid #dc6758',
  },
  label: {
    display: 'inline-block',
    width: '4.8rem',
    lineHeight: '4rem',
    color: '#373533',
    textAlign: 'center',
  },
  input: {
    width: 'calc(100% - 6rem)',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
  },
  select: {
    zIndex: 1,
    width: 'calc(100% - 7rem)',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
  },
  dropdownArrow: {
    position: 'absolute',
    top: '1rem',
    right: '1.8rem',
    zIndex: 0,
    width: '1.8rem',
  },
  btnBox: {
    marginTop: '2.5%',
    textAlign: 'center',
  },
  btn: {
    width: '25.25rem',
    padding: '2% 0',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#dc6759',
    outline: 'none',
    border: 0,
    borderRadius: '10rem',
    WebkitTapHighlightColor: 'transparent',
  },
  record: {
  	position: 'relative',
  	top: '0.5rem',
    width: '100%',
    fontSize: '1.2rem',
    textAlign: 'center',
  }
}
