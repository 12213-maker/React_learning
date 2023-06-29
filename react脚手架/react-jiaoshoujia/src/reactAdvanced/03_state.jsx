import React, { memo, useEffect, useState, Component } from 'react'

const State = memo(() => {
  const [c,setC] = useState(0)
  useEffect(()=>{
  },[])
  return (
    <div>State
      <div>
        {c}
        <Tate></Tate>
      </div>
    </div>
  )
})

class Tate extends Component {
  
  render() {
    return (
      <div>Tate</div>
    )
  }
}


export default State