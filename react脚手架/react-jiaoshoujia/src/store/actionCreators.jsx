//一般是通过函数返回action对象
import { ADD, SUB, ADDBYNUM } from './constants'

export const addAction = () => ({
  type: ADD
})

export const subAction = () => ({
  type: SUB
})

export const addByNumAction = (value = '') => {
  return {
    type: ADDBYNUM,
    payload: value
  };
}
