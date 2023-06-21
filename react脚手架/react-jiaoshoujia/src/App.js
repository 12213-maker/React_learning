import React, { Fragment } from "react"

class App extends React.Component {

    arr = [1, 2, 3, 4]

    renderDom = (
        <div style={{ color: 'lightblue' }}>
            {/* 字符串 */}
            my name is lnl
            {/* dom元素 */}
            <div>dom元素</div>
            {/* 函数组件 */}
            <Kid></Kid>
            {/* 数组 */}
            {
                this.arr.map((item) => {
                    return <Fragment key={item}>{item}</Fragment>
                })
            }
            <button onClick={() => { console.log(this.render()) }}>打印render之后的内容</button>
        </div>
    )
    flattenRenderDom = (dom) => {
        const { children } = dom.props
        const flatChildren = React.Children.toArray(children)
        const newChildren = flatChildren.filter((item) => {
            return React.isValidElement(item)
        })
        const lastChildren = React.createElement('div', { style: { color: 'lightpink' } }, 'last-children')
        newChildren.push(lastChildren)
        const newReactElement = React.cloneElement(dom, {}, ...newChildren)
        return newReactElement
    }
    render() {
        return (
            <>
                {this.renderDom}
                {this.flattenRenderDom(this.renderDom)}
            </>
        )
    }
}


const Kid = () => <div>Kid</div>

export default App