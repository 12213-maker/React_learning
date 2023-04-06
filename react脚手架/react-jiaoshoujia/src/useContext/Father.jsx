import React from 'react'
import { useState } from 'react'
import { userContext } from './context'
import Kid from './Kid';

export default function Father() {
  const [userinfo, setUserinfo] = useState({
    name: 'lnl',
    age: 21
  });
  return (
    <userContext.Provider value={userinfo}>
      <Kid></Kid>
      <button onClick={() => setUserinfo({ ...userinfo, name: 'mushroom', age: '一万岁' })}>改变userinfo</button>
    </userContext.Provider>
  )
}
