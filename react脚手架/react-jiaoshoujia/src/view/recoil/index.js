/* eslint-disable */

import React, { Fragment, memo, useMemo } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import Name, {SName, getData} from '../../store/recoil/index'

//useRecoilState:[value,action]
//useSetRecoilState: action
//useRecoilValue: value
const RecoilComponent = memo(() => {
  const name = useRecoilValue(Name);
  const setName = useSetRecoilState(Name)
  const [useName,SetName] = useRecoilState(Name)

  const [sname, setSname] = useRecoilState(SName)
  const [getdata] = useRecoilState(getData);
  console.log(getdata)

  return (
    <>
    <div>useRecoilValue: {name}</div>
    <div>useSetrecoilState: 
      <button onClick={()=>setName('mushroom')}>useSetrecoilState</button>
    </div>
    <div>useRecoilState: {useName} 
    <button onClick={()=>SetName('小狼')}>useRecoilState</button>
    </div>
    <h3>Selector：同步</h3>
    <div>{sname}</div>
    <button onClick={()=>setSname({name:'mushroom2',age:12333})}>set name and age</button>

    <h3>Selector：异步</h3>
    <div>
      showme{getdata}
    </div>
    </>
  )
})

export default RecoilComponent