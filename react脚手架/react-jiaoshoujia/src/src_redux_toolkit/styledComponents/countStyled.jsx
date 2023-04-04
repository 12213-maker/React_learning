import styled from "styled-components";

const App2Styled = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%,-50%);
  background-color: ${props => props.backColor};
  .alltitle{
    color:red;
    font-size:25px;
    text-align: center;
  }
  .title{
    font-size: 25px;
    display: block;
    background-color: lightpink;
    text-align: center;
  }
`
export default App2Styled;