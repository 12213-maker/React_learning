import React, { forwardRef, useImperativeHandle, useRef } from 'react'


//1.通过useRef和forwardRef 让父组件得到子组件的dom元素
// export default function App() {
//     let parentRef = useRef();
//     function getSapn() {
//         console.log(parentRef.current);
//     }
//     return (
//         <>
//             <Parent ref={parentRef}></Parent>
//             <button onClick={e => getSapn()}>点击获取子组件span</button>
//         </>
//     );
// }

// const Parent = forwardRef(function (props, ref) {
//     return (
//         <>
//             <span ref={ref}>子组件span</span>
//         </>
//     );
// })


//2.通过useImperativeHandle从子组件中暴露ref ，从而在父组件中得到
export default function App() {
    let parentRef = useRef();
    function getSapn() {
        console.log(parentRef.current);
        console.log(parentRef.current.ref1.current.innerText);
        console.log(parentRef.current.ref2);
        console.log(parentRef.current.ref3);

    }
    return (
        <>
            <Parent ref={parentRef}></Parent>
            <button onClick={e => getSapn()}>点击获取所有子组件</button>
        </>
    );
}

const Parent = forwardRef(function (props, ref) {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    //通过useimperatHandle暴露出去
    useImperativeHandle(ref, () => {
        return {
            ref1,
            ref2,
            ref3
        }
    },[])

    return (
        <>
            <span ref={ref1}>ref1</span>
            <span ref={ref2}>ref2</span>
            <span ref={ref3}>ref3</span>
        </>
    );
})