import {CHANGE_INPUT,CHANGE_INPUTS,DELETE_ITEM}  from './actionTypes'
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value:value
})
export const changeInputActions = (value) => ({
    type: CHANGE_INPUTS,
    value:value
})
export const deleteitem = (value) => ({
    type: DELETE_ITEM,
    index:value
})