import React, { memo } from 'react'

const MemoOhter = memo(
    function Other(){
        return <div>我是Other</div>
    }
)

export default MemoOhter