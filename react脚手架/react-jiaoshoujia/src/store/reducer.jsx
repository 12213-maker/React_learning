import { ADD, SUB, ADDBYNUM } from './constants'

const initalState = {
  count: Number(window.sessionStorage.getItem('count')) || 0
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD:
      let newState = { ...state, count: state.count + 1 }
      window.sessionStorage.setItem('count', Number(newState.count));
      return newState;
    case SUB:
      let newState2 = { ...state, count: state.count - 1 }
      window.sessionStorage.setItem('count', newState2.count);
      return newState2;
    case ADDBYNUM:
      let newState3 = { ...state, count: Number(action.payload) }
      console.log(newState3);
      window.sessionStorage.setItem('count', newState3.count);
      return newState3;
    default:
      return state;
  }
}