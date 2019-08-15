import React, { Component, Fragment } from 'react'
import axios from 'axios'
import {CSSTransition} from 'react-transition-group'

class App extends Component {
    render() {    
        return ( 
            <Fragment>
                <h1>APP</h1>
                <div>{this.state.index.appid}-------------{this.state.index.wxjoincode}</div>
                <ul className="my-lsi">
                {
                    this.state.lists.map((item,index)=>{
                        return (
                            <li key={index+item}>
                            <p>{item.name}----{item.link}</p>
                            <img width="100px" height="100px" alt={item.image} src={item.image}/>
                            </li>
                        )
                    })
                } 
                </ul>
                <ul>
                    {
                        this.state.listd.map((item,index)=>{
                            return (
                                <li key={item+index}>{item.appid}----{index}</li>
                            )
                        })
                    }
                </ul>
                <ul> 
                    { 
                        <li dangerouslySetInnerHTML={{__html: this.state.item}}></li>
                    }
                </ul>
                <ul className='list-li'>
                    {
                        this.state.list.map((item,index)=>{
                            return ( <li key={index+item} onClick={this.deleteItem.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>)
                        })
                    } 
                </ul> 
                < ul className="name-list" ref={(ul)=>{this.ul=ul}}>
                    <li> {this.state.message} </li> 
                    <li>
                        <input className="input" ref={(input)=>{this.input=input}} type="tel" maxLength="40"  value={this.state.inputValue} onChange={this.inputChange.bind(this)} onKeyDown={this.onKeyDowns.bind(this)}/> 
                        <button onClick={this.listadd.bind(this)}> 增加 </button> 
                    </li> 
                </ul> 
                <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
                <div className={this.state.isShow ? 'show1' : 'hide1'}>BOSS级人物-孙悟空</div>
                <CSSTransition 
                in={this.state.isShow}   //用于判断是否出现的状态
                timeout={2000}           //动画持续时间
                classNames="boss-text"   //className值，防止重复
                unmountOnExit
                >
                <div>BOSS级人物-孙悟空</div>
                </CSSTransition>
                < button onClick={this.toToggole}> 点击{this.state.numbers} </button>
            </Fragment>
        )
    }; 
    constructor(props) {
    super(props) //调用父类的构造函数，固定写法
    this.state = {
        numbers:0,
        listd: [],
        index:{},
        img: 'https://presale.jhtsoft.com/picms/1c86e220113d9e.png',
        isShow:true,
        item: '<p>html代码的输出</p>',
        message: '开始学习react！',
        inputValue: '', // input中的值
        list: ['安徽', '北京', '重庆', '上海'], //服务列表
        lists: [],
    }
    this.toToggole = this.toToggole.bind(this);
    }; 
    inputChange(e) {
        this.setState({
        inputValue: this.input.value
        })
    }; 
    onKeyDowns(e){
        //  console.log(e.keyCode)
        if(e.keyCode===13){
        this.setState({
        list: [...this.state.list, this.input.value],
        inputValue: ''
        }, () => {})
        }
    };
    listadd(e) {
        if (this.state.inputValue === '') {
        return
        }
        this.setState({
        list: [...this.state.list, this.input.value],
        inputValue: ''
        },()=>{
        })
    }; 
    deleteItem(index) {
        this.state.list.splice(index, 1)
        this.setState({
        list: this.state.list
        })
    };
    toToggole() {
        this.setState({
        isShow: this.state.isShow ? false : true
        })
    };
    componentDidMount() {
        this.reacts()
        this.reactsd()
        //监听
        // window.addEventListener('this.sata', function (e) {
        //    console.log(e)
        // })
        //滚动事件
        window.onscroll = () => {
                if (window.onscroll) {
                    this.bindScroll(); //写个方法在这里调用
                }
            }
    };
    bindScroll(){
        // let tec = this;
        let clientHeight = document.documentElement.clientHeight; //可视区域高度(浏览器的高度)
        let  wScrollY = window.scrollY;
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop; //滚动条滚动高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度(网页的高)
        if ((clientHeight + scrollTop >= scrollHeight)){
             console.log(clientHeight, wScrollY, scrollTop, scrollHeight)
         }
    };
    index(){
          console.log(this, 'www')
         /// if (this.state) {
              console.log(this.state.inputValue, 'ss')
        //  }
    };
    reactsd() {
        axios.get('https://www.easy-mock.com/mock/5d0b3a9ccf9aa30675f0a14a/xiongReact/react1')
        .then((res) => {
            this.setState({
            lists:res.data.data
            })
        })
        .catch((error) => {
          console.log('axios 获取数据失败' + error)
        })
    };
    reacts() {
        axios.get('https://www.easy-mock.com/mock/5d0b3a9ccf9aa30675f0a14a/xiongReact/react')
        .then((res) => {
            let list = [];
            list.push(res.data.data)
            this.setState({
            listd: list,
            index: res.data.data
            })
        })
        .catch((error) => {
          console.log('axios 获取数据失败' + error)
        })
    };
};
export default App;