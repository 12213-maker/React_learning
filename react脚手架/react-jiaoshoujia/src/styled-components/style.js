
// 3. 使用css in js ， 有很多第三方库适用于css in js，比如styled-component
//    而且使用styled-component还可以轻易的实现js和css的交互，通过props传递变量
import styled, { ThemeProvider } from "styled-components";
const StyledComponent3 = styled.div`
    font-size: 20px;
    background-color: ${props => props.bColor};
    .component4{
        background-color: pink;
    }
    .mark{
      padding: 50px;
    }
    .ul{
        color: blue;
        background-color: ${props=>props.theme.themeColor};
        li{
            text-decoration: underline;
            &:hover{
                background-color: blue !important;
                color:white;
            }
            &:active{
              background-color: black;
              color: red;
            }
            &:nth-child(even){
                background-color: pink;
            }
            &:nth-child(even)::after{
                content: 'showme-after';
            }
        }
    }
`

export { StyledComponent3, ThemeProvider };