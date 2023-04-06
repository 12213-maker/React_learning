import React from 'react'
import { useContext } from 'react'
import { userContext } from './context'

export default function Kid() {
  const userInfo = useContext(userContext);
  return (
    <div>
      <h4>Kid</h4>
      <span>name: {userInfo.name} age: {userInfo.age}</span>
    </div>
  )
}
