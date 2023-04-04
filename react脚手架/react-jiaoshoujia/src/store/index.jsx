import { createStore } from 'redux'
import reducer from './reducer';

//store创建的时候需要传入一个reducer
const store = createStore(reducer);
export default store;