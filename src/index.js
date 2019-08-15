import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import List from './List'
import Zouqi from './Zouqi'
import TodoList from './TodoList'
import 'antd/dist/antd.css'
import './app.css'
ReactDOM.render(<App/>,document.getElementById('root'))
ReactDOM.render(<List/>,document.getElementById('add'))
ReactDOM.render(<Zouqi/> , document.getElementById('app'))
ReactDOM.render(<TodoList/> , document.getElementById('todo'))