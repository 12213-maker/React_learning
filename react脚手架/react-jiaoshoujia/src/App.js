import React, { PureComponent } from 'react'
import className from 'classnames'

export default class App extends PureComponent {
  render() {
    const foo = false
    return (
      <div>
        <ul>
          <li className='foo bar baz'>1</li>
          {/* className函数中可以传入字符串,对象,数组 混入的方式*/}
          <li className={className('foo','bar','baz')}>2</li>
          <li className={className('foo bar baz')}>3</li>
          <li className={className({foo:foo},'bar')}>4</li>
          <li className={className(foo,['bar','baz'])}>5</li>
          <li className={className('  ',['bar','baz',{fuc:true}])}>6</li>
        </ul>
      </div>
    )
  }
}
