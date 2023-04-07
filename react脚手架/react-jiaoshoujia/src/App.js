import React, { PureComponent } from 'react'
import Count from './useEffect/Count';
import Father from './useContext/Father';
import Home from './useReducer/Home';
import Callback from './useCallback/Callback';
import Memo from './useMemo/Memo';
import Parent from './useRef/Parent';
import Index from './useLayoutEffect/Index';
import Myhook from './自定义hook/Myhook';

export default class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        const { counter } = this.state;
        return (
            <div>
                {/* <div style={{ backgroundColor: 'lightblue' }}>
                    <h2>useState的使用</h2>
                    <span>{counter}</span>
                    <hr></hr>
                    <button onClick={() => this.setState({ counter: counter + 1 })}>counter+1</button>
                    <hr></hr>
                </div>

                <hr></hr>

                <div style={{ backgroundColor: 'lightpink' }}>
                    <h2>useEffect的使用</h2>
                    <Count></Count>
                </div>

                <hr></hr>

                <div style={{ backgroundColor: 'lightyellow' }}>
                    <h2>useContext的使用</h2>
                    <Father></Father>
                </div>


                <div style={{ backgroundColor: 'lightgreen' }}>
                    <h2>useReducer的使用</h2>
                    <Home></Home>
                </div>

                <div style={{ backgroundColor: '#fba' }}>
                    <h2>useCallback的使用</h2>
                    <Callback></Callback>
                </div>


                <div style={{ backgroundColor: '#bfa', padding: '20px' }}>
                    <h2>useMemo的使用</h2>
                    <Memo></Memo>
                </div> */}

                {/* <div style={{ backgroundColor: '#fba' }}>
                    <h2>useRef的使用</h2>
                    <Parent></Parent>
                </div> */}

                {/* <div style={{ backgroundColor: 'lightblue' }}>
                    <h2>useRef的使用</h2>
                    <Index></Index>
                </div> */}

                <div style={{ backgroundColor: 'lightpink' }}>
                    <h2>自定义hook的使用</h2>
                    <Myhook />
                </div>
            </div>
        )
    }
}


