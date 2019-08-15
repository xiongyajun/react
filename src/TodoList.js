import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { message } from 'antd'
import store from './store'
// import {DELETE_ITEM} from './store/actionTypes'
import {deleteitem} from './store/actionCreators'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        input1:'admin',
        input2:'admin',
        list: store.getState().list,
        aaaa: store.getState().aaaa
        }
        this.storeChange = this.storeChange.bind(this) //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() { 
    return ( 
        <Fragment>
            <h1>TODOLIST</h1>
            <div>{this.state.aaaa}</div>
            <div>
                {
                    this.state.list.map((list,index)=>{
                        return (
                            <div key={list + index} onClick={this.deleteItem.bind(this,index)}>
                                {list}
                            </div>
                        )
                    })
                }
            </div>
            <br/>
            < h3> 用户登录 </h3>
            用户名：<input value={this.state.input1} onChange={this.inputchang1.bind(this)}/>
            <br/><br/>
            密&nbsp;&nbsp;&nbsp;&nbsp;码：<input value={this.state.input2} onChange={this.inputchang2.bind(this)}/>
            <br />
            <br />
            <button onClick={this.reacts.bind(this)}>登录</button>
        </Fragment>
        );
    }
    deleteItem(index){
    //    const action = {
    //        type: DELETE_ITEM,
    //        index:index
    //    }
    const action = deleteitem(index)
       store.dispatch(action)
    };
      storeChange() {
          this.setState(store.getState())
      };
    inputchang1(e){
        this.setState({
        input1: e.target.value
        })
    };
    inputchang2(e) {
        this.setState({
        input2: e.target.value
        })
    };
    reacts() {
        axios.post('https://www.easy-mock.com/mock/5d0b3a9ccf9aa30675f0a14a/xiongReact/long',
        {username:this.state.input1,password:this.state.input2})
        .then((res) => {
            if(res.data.code===20000){
            message.success('登录成功', 2);
            }else{
            message.info(res.data.data,2);
            }
        })
        .catch((error) => {
            console.log('axios 获取数据失败' + error)
        })
    }
}

export default TodoList;