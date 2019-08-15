import React, {Component,Fragment} from 'react'
import Xiong from './Xiong'
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class List extends Component{
    render() {
        return(
            <Fragment>
                <h1>LIST</h1>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                    return (
                                        <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={item+index}
                                        >
                                        <Xiong content={item}  index={index}  deleteIteme={this.deleteIteme.bind(this)}/>
                                        </CSSTransition>
                                    )
                            })
                        }
                    </TransitionGroup>
                </ul>  
                <div>
                    <label htmlFor="jspang">加入服务：</label>
                    <input id="jspang" className="input" maxLength="2" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.listadd.bind(this)}> 增加服务 </button>
                </div>
                    <ul>
                        {
                            this.state.floor3.map((list,index)=>{
                                return (
                                    <li key={list+index}>
                                        {list.goodsId}
                                    </li>
                                )
                            })
                        }
                    </ul>
            </Fragment>
        )
    };
    constructor(props) {
        super(props) //调用父类的构造函数，固定写法
        this.state = {
            text:'父传子的数据',
            index:{},
            item: '<p>xiongyajun</p>',
            message: '开始学习react！',
            inputValue: '', // input中的值
            list: ['安徽','甘肃','江苏'], //服务列表
            floor3:[]
        }
    };
    componentDidMount() {
        this.list()
    };
    list() {
        axios.get('https://www.easy-mock.com/mock/5d0b3a9ccf9aa30675f0a14a/xiongReact/list').then(
            (res) => {
                this.setState({
                    index: res.data.data,
                    floor3: res.data.data.floor3
                })
            }).catch((error) => {
            console.log('axios 获取数据失败' + error)
        })
    };
    inputChange(e) {
        this.setState({
        inputValue: e.target.value
        })
    };
    listadd(e) {
        if (this.state.inputValue.replace(/\s+/g, "") === '') {
            this.setState({
                inputValue: ''
            })
        }else{
         this.setState({
             list: [...this.state.list, this.state.inputValue],
             inputValue: ''
         })
        } 
    };
    deleteIteme(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
        list: list
        })
    };
    //    shouldComponentUpdate(nextProps,nextState) {
    //        if (nextProps.content === this.props.content) {
    //            console.log(nextProps.content,this.props.content)
    //            return true
    //        } else {
    //            return false
    //        }
    //    };
    //    componentWillUpdate() {
    //        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    //    }
    //    componentDidUpdate() {
    //        console.log('componentDidUpdate----组件更新之后执行')
    //    }
    //    componentWillMount() {
    //        console.log('componentWillMount----组件将要挂载到页面的时刻')
    //    };
    //    componentDidMount() {
    //        console.log('componentDidMount----组件挂载完成的时刻执行')
    //    };
    //    componentWillReceiveProps() {
    //        console.log('child - componentWillReceiveProps')
    //    };
    //    componentWillUnmount() {
    //        console.log('child - componentWillUnmount')
    //    }
}
export default List