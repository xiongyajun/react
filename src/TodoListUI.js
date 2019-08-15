import React, {
    Component
} from 'react';
class TodoListUi extends Component {

    render() {
        return ( 
        <div> 
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
        </div> 
        );
        }
    }

    export default TodoListUi