import { useState } from "react";
import { useEffect, useContext } from "react";
import { nameContext, ageContext, sexContext } from "../Myhook";

//通过这个hook实现 在组件打印和卸载的时候都发出提示
export function useMyhook(name) {
  useEffect(() => {
    console.log(`${name}创建`);
    return () => {
      console.log(`${name}卸载`);
    }
  }, [])
}


//实现一个useMycontext，实现集合多个context，直接返回一个对象，其中包括所有useContext的值
export function useMycontext() {
  const name = useContext(nameContext);
  const age = useContext(ageContext);
  const sex = useContext(sexContext);
  return { name, age, sex };
}


//实现useMyScroll-获取滚动位置
export function useMyScroll() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const emitScroll = () => {
      setScroll(window.pageYOffset);
    }
    window.addEventListener('scroll', emitScroll);
    return () => {
      window.removeEventListener('scroll', emitScroll);
    }
  })
  return scroll;
}

//实现useLocalstory
export function useLocalstory(data) {

  const [value, setValue] = useState(() => {
    const datavalue = window.localStorage.getItem(data[0]) || data[1];
    return datavalue;
  })

  const mySetValue = (data) => {
    window.localStorage.setItem(data[0], data[1]);
    setValue(data[1]);
  }

  //当value改变的时候，重置localStorage
  useEffect(() => {
    window.localStorage.setItem(data[0], data[1]);
  }, [])

  return [value, mySetValue];
}