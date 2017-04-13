import React from 'react'
import ReactDOM from 'react-dom'
import 'react-fastclick'
import pace from '@dlghq/pace-progress'
import '@dlghq/pace-progress/themes/pink/pace-theme-minimal.css'
pace.start()
import 'offline-js'
import 'offline-js/themes/offline-theme-default.css'
import 'offline-js/themes/offline-language-english.css'

import 'react-s-alert/dist/s-alert-default.css';

import './rem'
import App from './components/personal/App'
//import App from './components/pair/App'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
