import {CHANGE_INPUT, CHANGE_INPUTS, DELETE_ITEM } from './actionTypes'
const defaultState = {
        aaaa: 'Write Something',
        list: [
            '早上4点起床，锻炼身体',
            '中午下班游泳一小时'
        ]
}
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.aaaa = action.value
        return newState
    }
    if (action.type === CHANGE_INPUTS) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list.push(newState.aaaa)
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}