import { atom, selector } from "recoil";

const Name = atom({
  key: 'name',
  default: 'lnl'
})

const Age = atom({
  key: 'age',
  default: '21'
})


//通过selector修改atom中的状态，get类似于computed，一个纯函数，同步
const SName = selector({
  key: 'Sname',
  get: ({ get }) => {
    const name = get(Name)
    const age = get(Age)
    return `name: ${name}, age: ${age}`
  },
  set: ({ set }, newValue) => {
    const { age, name } = newValue
    set(Name, name)
    set(Age, age)
  }
})

//异步
const getData = selector({
  key: 'getData',
  get: async ({get}) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(get(Name))
      }, 1500)
    }).then((res)=>{
      return res
    })
  }
})



export default Name
export { SName, getData }