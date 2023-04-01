// 3. 使用css in js (只用包裹外面的一层，就可以在下面所有的dom里面添加样式)
import { useState } from 'react';
import { StyledComponent3, ThemeProvider } from './style'
export default function Component3() {
  let backgroundColor = [
    { label: '蓝色', value: 'lightblue' },
    { label: '红色', value: 'pink' },
    { label: '绿色', value: 'lightgreen' },
    { label: '黄色', value: 'lightyellow' },
  ];
  let [activeBackColor, setActiveBackColor] = useState('lightblue');
  function changeSelectbackcolor(e) {
    setActiveBackColor(e.target.value)
  }
  return (
    <StyledComponent3 bColor={activeBackColor}>
      <span style={{ paddingRight: '50px' }}>使用props改变背景颜色</span>
      <select
        onChange={e => changeSelectbackcolor(e)}
        name="selectbackgroundcolor"
        value={activeBackColor}
      >
        {
          backgroundColor.map((item) => {
            return <option
              key={item.value}
              label={item.label}
              value={item.value}
            ></option>
          })
        }
      </select>
      <div className='mark'>--------------使用styled-component----------------</div>
      <Compoonent4></Compoonent4>
    </StyledComponent3>
  );
}
function Compoonent4() {
  return (
    <ThemeProvider theme={{ themeColor: 'black' }}>
      <h2 className="component4">Component4-title</h2>
      <ul className="ul">
        <li className={'title ' + (true ? 'active' : '')}>li</li>
        <li className={['title', (true ? 'active' : '')].join(' ')}>li</li>
        <li>li</li>
        <li>li</li>
      </ul>
    </ThemeProvider>
  );
}