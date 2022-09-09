import styled from 'styled-components'

/* 这里的div是一个函数 , 调用的方式是函数+模板字符串的格式 , 然后会返回一个组件 */
export const AppcopyContainer = styled.div`
  font-size: 14px;
  background-color: ${props => props.theme.themeColor};
  .ulClass{
    font-size: 20px;
  }
  li:nth-child(2){
    color: red;
    background-color: pink;
  }
  li{
    &::after{
      content: '111';
    }
    
  }
`