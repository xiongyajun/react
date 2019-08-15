import React, { Component,Fragment } from 'react'
import { Input , Button , List,Avatar  } from 'antd'
// import { CHANGE_INPUT, CHANGE_INPUTS} from './store/actionTypes'
import {changeInputAction,changeInputActions} from './store/actionCreators'
import store from './store'
class Zouqi extends Component {
  render() { 
    return ( 
      <Fragment>
        <h1>ZOUQI</h1>
          <div>
              <div>
                <Input   placeholder='good morning' style={{ width:'250px', marginRight:'10px'}} value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                <Button type="primary" onClick={this.add.bind(this)}>增加</Button>
              </div>
              <div style={{marginTop:'10px'}}>
                  <List
                  bordered
                  dataSource={this.state.datas}
                  renderItem={item=>(<List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item}</a>}
                    description="Ant DeTeam"
                  />
                  <div><Button size="small" type="primary">增加</Button></div>
                  <div style={{margin:'0px 5px'}}><Button size="small" type="primary">删除</Button></div>
                  <div><Button size="small" type="primary">修改</Button></div>
                  </List.Item>)}
                  />
              </div>
          </div>
          <div>{this.state.aaaa}</div>
      </Fragment>
    );  
  };
  constructor(props) {
    super(props) //调用父类的构造函数，固定写法
    this.state = {
      datas: [
      '早8点开晨会',
      '早9点讨论会',
      '晚5:30进行review'
      ],
      inputValue:'',
      aaaa: store.getState().aaaa
      }
       //----------关键代码-----------start
       this.storeChange = this.storeChange.bind(this) //转变this指向
       store.subscribe(this.storeChange) //订阅Redux的状态
       //----------关键代码-----------end
  };
  storeChange() {
    this.setState(store.getState())
  };
  inputChange(e) {
    this.setState({
    inputValue: e.target.value
    })
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  };
  add() {
    if (this.state.inputValue !== '') {
    let yy = this.state.datas
    yy.push(this.state.inputValue)
    this.setState({
    datas: yy,
    inputValue:''
    })
        // const action = {
        //   type: CHANGE_INPUTS
        // }
        const action = changeInputActions()
        store.dispatch(action)
    }  
  }
}
export default Zouqi;