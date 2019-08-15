import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
class Xiong  extends Component {
    state = { }
    render() { 
        return (
            <Fragment>

                        < li className='my-li' >
                            <span>{this.props.index} 组件的使用------父传子增加,子传父删除---------{this.props.content}</span> 
                            <span className="my-span" onClick={this.handleClick.bind(this)}>删除</span>
                        </li>

            </Fragment>
        );
    };
    handleClick() {
        this.props.deleteIteme(this.props.index)
    }
}
    Xiong.propTypes = {
        content: PropTypes.string.isRequired, //必须传值isRequired
        deleteItem: PropTypes.func,
        index: PropTypes.number
    };
    Xiong.defaultProps = {
        avname: '松岛枫'
    }
export default Xiong;