import {makeObservable, makeAutoObservable, action, computed, observable} from 'mobx'

class Num{
  constructor(){
    makeObservable(this,{
      num:observable,
      up:action.bound,
      down:action.bound,
      double:computed
    })
  }

  num = 0
  up(){
    this.num++
  }
  down(){
    this.num--
  }
  get double(){
    return this.num*2
  }
}

class Count{
  person = {}
  
  // 第一个参数this
  // 第二个参数表示不适用他的默认推
  // 第三个参数表示自动绑定this
  constructor(){
    makeAutoObservable(this,null,{autoBind:true})
  }

  setPersonstate(data){
    this.person = data
  }
}

export default new Num()
const count = new Count()
export {count}



