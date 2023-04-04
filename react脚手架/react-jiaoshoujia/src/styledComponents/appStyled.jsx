import styled from "styled-components";

const AppStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
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
export default AppStyled;