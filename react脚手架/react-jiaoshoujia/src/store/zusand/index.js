import {create} from 'zustand';
import {produce} from 'immer'

const useCounter = create((set) => ({
  count: 0,
  obj:{
    a:{
      b:{
        c:[1,2,3]
      }
    }
  },
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  handlerC: (value)=>set((state)=>produce(state,draft=>{
    draft.obj.a.b.c.push(value)
  }))
}));

export default useCounter
