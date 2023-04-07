import React, { createContext, useContext, useState } from 'react'
import { useMyhook, useMycontext, useMyScroll, useLocalstory } from './myhooks';


export default function Myhook() {
  useMyhook('Myhook');
  const [show, setShow] = useState(true);
  const scrollTop = useMyScroll();

  return (
    <div>
      <div style={{ backgroundColor: 'lightcoral', padding: '20px' }}>
        <h2>实现useMyhook</h2>
        <button onClick={() => setShow(!show)}>changeShow</button>
        {show && <UseMyhookComponent></UseMyhookComponent>}
      </div>

      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <h2>实现useMycontext</h2>
        <UseMycontextComponent></UseMycontextComponent>
      </div>

      <div style={{ backgroundColor: 'lightyellow', padding: '20px' }}>
        <h2>实现useLocalstory-定义的值自动储存到localstorage</h2>
        <LocalStoragekeep></LocalStoragekeep>
      </div>

      <div style={{ backgroundColor: 'lightpink', padding: '20px', height: '2000px' }}>
        <h2>实现useMyScroll-获取滚动位置</h2>
        <h3>{scrollTop}</h3>
      </div>

    </div>
  )
}

//实现useMyhook
function UseMyhookComponent() {
  useMyhook('useMyhookComponent');
  return (
    <div>
      <span>Kid</span>
    </div>
  )
}



export const nameContext = createContext();
export const ageContext = createContext();
export const sexContext = createContext();

//实现useMycontext,当要获取多个context的值的时候使用useMycontext直接一步获取
function UseMycontextComponent() {

  return (
    <nameContext.Provider value={{ name: 'lnl' }}>
      <ageContext.Provider value={{ age: 21 }}>
        <sexContext.Provider value={{ sex: 'female' }}>
          <Kid></Kid>
        </sexContext.Provider>
      </ageContext.Provider>
    </nameContext.Provider>
  );
}
function Kid() {

  //当有很多个context的时候
  const name = useContext(nameContext);
  const age = useContext(ageContext);
  const sex = useContext(sexContext);

  //使用自定义useMycontext
  const contexts = useMycontext();

  return (
    <>
      <div style={{ backgroundColor: 'lightcyan' }}>
        <h2>自己一个一个定义</h2>
        <div>name:{name.name}</div>
        <div>age:{age.age}</div>
        <div>sex:{sex.sex}</div>
      </div>
      <div style={{ backgroundColor: 'lightcyan' }}>
        <h2>使用自定义useMycontext</h2>
        <div>name:{contexts.name.name}</div>
        <div>age:{contexts.age.age}</div>
        <div>sex:{contexts.sex.sex}</div>
      </div>
    </>
  );

}


//实现useLocalstory-定义的值自动储存到localstorage
function LocalStoragekeep() {
  const [name, setName] = useLocalstory(['name', 'lnl']);
  return (
    <>
      <span>{name}</span>
      <br></br>
      <button onClick={() => setName(['name', 'mushroom'])}>change name and keep name</button>
    </>
  );
}