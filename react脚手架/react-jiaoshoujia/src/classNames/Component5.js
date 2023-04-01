import classNames from "classnames";
export default function Component5() {
  let bar = true;
  return (
    <>
      <div className={classNames('foo bar', 'title')}>div</div>
      <div className={classNames({ active: bar, bar })}>div</div>
      <div className={classNames(['item', bar ? 'active' : ''])}>div</div>
      <div className={classNames(['item', { bar }])}>div</div>
    </>
  );

}


//在给react里面的dom添加className的时候，不是很方便,所以使用classnames来进行更改

/*
vue添加class：
  1.对象
  ：class="{active：isActive}"

  2.数组
  :class="['item',index==activeIndex?'active':'']" 

  3.数组+对象
  ：class="[active,{active:isActive}]"

*/