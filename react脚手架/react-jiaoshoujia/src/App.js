import React, { PureComponent } from 'react'

 class App extends PureComponent {
  render() {
    return (
      <div>App:{this.context.name}</div>
    )
  }
}

const enhanceFunc = function(WrapperComponent,newConponentName){

  //但是在这里有一个问题就是只要使用这个高阶组件那么返回的新组件的名字永远都叫做NewComponent
     class NewComponent extends PureComponent{
      render(){
        return (
          <div>
            高阶组件
            <WrapperComponent {...this.context}/>
          </div>
        )
      }

    }
    //但是在这里有一个问题就是只要使用这个高阶组件那么返回的新组件的名字永远都叫做NewComponent
    //修改这个组件的名字 , 避免每次使用高阶组件输出的组件名字都一样
    NewComponent.displayName = newConponentName

    return NewComponent
}



const newApp = enhanceFunc(App,'Mycomponent')


export default newApp










