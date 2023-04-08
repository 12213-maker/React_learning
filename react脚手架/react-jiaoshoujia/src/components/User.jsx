import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function User() {
  const username = useSelector((state) => state.user.username);
  console.log(username, username ? username : '空', 'user');
  return (
    <div>
      {username ? <span>欢迎光临，用户：{username}</span> : <Redirect to='/nomatch'></Redirect>}
    </div>
  )
}
