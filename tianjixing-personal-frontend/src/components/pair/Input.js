import React, {PureComponent} from 'react'
import Radium from '../../configuredRadium'

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
		      console.log(code)
		    if(code == null){
		      self.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx9d225739e73bf343&redirect_uri=http://www.1hu9lai.cn/pair/index.html&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect");
		    }
	    }
    this.male = {}
    this.female = {}
    this.state = {
      record: false
  	}
  }


  onSubmit = () => {
    this.props.onSubmit({
      male: {
      	firstName: this.male.firstName.value,
        lastName: this.male.lastName.value,
      },
      female: {
        firstName: this.female.firstName.value,
        lastName: this.female.lastName.value,
      },
    })
  }

	onHistory = ({male, female}) => {
		this.props.onHistory({
	    male: male,
	    female: female
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

	   fetch('http://192.168.99.143:8480/heluo/api/history_pair', {
	      method: "POST",
	      headers: {
	        'Content-Type': 'application/json',
	        'Accept': 'application/json',
	      },
	      body: JSON.stringify({
	        "code": ''
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
          <div style={styles.form}>
            <div style={styles.inputBox}>
              <div style={[styles.row, styles.firstRow]}>
                <label style={styles.labelColumn}></label>
                <div style={[styles.lastNameColumn, styles.nameImgBox]}>
                  <img src={require('./images/last_name.png')} alt="姓氏"
                       style={styles.nameImg}/>
                </div>
                <div style={[styles.firstNameColumn, styles.nameImgBox]}>
                  <img src={require('./images/first_name.png')} alt="姓名"
                       style={styles.nameImg}/>
                </div>
              </div>

              {[
                {gender: 'male', display: '男方'},
                {gender: 'female', display: '女方'},
              ].map(({gender, display}) =>
                  <div style={styles.row}>
                    <label style={styles.labelColumn}>
                      <img src={require(`./images/${gender}.png`)} alt={display}
                           style={styles.label}/>
                    </label>
                    <div style={styles.lastNameColumn}>
                      <input ref={e => this[gender].lastName = e} type="text" placeholder="姓氏"
                            style={styles.input}/>
                    </div>
                    <div style={styles.firstNameColumn}>
                      <input ref={e => this[gender].firstName = e} type="text" placeholder="名字"
                            style={styles.input}/>
                    </div>
                  </div>
              )}
              <div style={styles.btnBox}>
                <button /*onTouchStart={ this.handleStart }*/
                    onClick={this.onSubmit} style={styles.btn}/>
              </div>
               <div onClick={this.handleRecord}  style={styles.record} >历史记录</div>
            </div>
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
    display: 'none'
  },
}

const styles = {
  container: {
  	width: '100%',
    height: '100%',
    backgroundImage: `url(${require(`./images/input_bg.png`)})`,
    backgroundSize: '100% 100%',
  },
  form: {
    margin: '0 auto',
    width: '80%',
    paddingTop: '85%',
    paddingBottom: '10%',
  },
  inputBox: {
    fontSize: '1.4rem',
  },
  row: {
    marginBottom: '1.4rem',
  },
  firstRow: {
    marginBottom: 0,
  },
  column: {
    display: 'inline-block',
    width: '50%',
  },
  labelColumn: {
    display: 'inline-block',
    width: '20%',
    textAlign: 'center',
  },
  lastNameColumn: {
    display: 'inline-block',
    width: '35%',
  },
  firstNameColumn: {
    display: 'inline-block',
    width: '45%',
  },
  nameImgBox: {
  	paddingBottom: '0.3rem',
    textAlign: 'center',
  },
  nameImg: {
    width: '2.5rem',
  },
  label: {
    width: '3.5rem',
    height: '2.5rem',
  },
  input: {
  	margin: '0 auto',
    display: 'block',
    width: '90%',
    height: '3.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    lineHeight: '3.3rem',
    textAlign: 'center',
    outline: 'none',
    border: '0.15rem solid #d2cecc',
    borderRadius: '0.3rem',
    boxShadow: '-1px 0.1rem 0.1rem #d2cecc inset',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
  },
  btnBox: {
    marginTop: '20%',
    textAlign: 'center',
  },
  btn: {
    width: '14.35rem',
    height: '3.75rem',
    outline: 'none',
    backgroundImage: `url(${require('./images/submit_btn.png')})`,
    backgroundSize: '100%',
  },
  record: {
  	position: 'relative',
  	top: '0.5rem',
    width: '100%',
    fontSize: '1.2rem',
    textAlign: 'center',
  }
}
