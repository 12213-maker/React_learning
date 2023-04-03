import { useSelector, useDispatch } from "react-redux";
import { changeUserInfo, userSlice } from "../store/userSlice";
import UserStyled from './style'
const User = () => {
  const userInfo = useSelector(state => state.userinfo);
  const dispatch = useDispatch()

  return (
    <UserStyled titleColor={'lightblue'}>
      <h2>展示个人信息</h2>
      {userInfo.username} <br />
      {userInfo.age} <br />
      {userInfo.sex}
    </UserStyled>
  );
}

export default User;