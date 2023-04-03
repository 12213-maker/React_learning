import store from './store/index'
import { Provider } from 'react-redux';
import Counter from './Counter';
import User from './User/User';

const App = () => {
    return (
        <Provider store={store}>
            APP
            <Counter></Counter>
            <User></User>
        </Provider>
    );
}
export default App