### 前端路由的核心

- 改变 url，但是页面不要进行强制刷新（阻止 a 元素的默认跳转事件）

  - 通过 url 的 hash 改变 url (hash 不会引起页面的跳转)

  ```
  <div>
    <a href="#/about">about</a>
    <a href="#/home">home</a>
    <div id="routerView">
      <div id="about">我是about</div>
      <div class="route" id="home">我是home</div>
    </div>
  </div>

  <script>
    const pageAbout = document.getElementById('about');
    const pageHome = document.getElementById('home');
    window.addEventListener('hashchange', () => {
      //通过location.hash得到hash值
      const path = location.hash;
      if (path === '#/about') {
        pageHome.style.display = 'none';
        pageAbout.style.display = 'block';
      } else {
        pageAbout.style.display = 'none';
        pageHome.style.display = 'block';
      }
    })
  ```

  - 通过 html5 中的 history 模式修改 url ， 一下几个 api 可以改变 url 但是不会引起页面的改变
    - replaceState
    - pushState
    - popstate
    - go
    - forward
    - back
  ```
    <div>
    <a href="/about">about</a>
    <a href="/home">home</a>
    <div class="routerView"></div>
    </div>
  
    const routerView = document.getElementsByClassName('routerView')[0];
    const aEls = document.getElementsByTagName("a");
    //阻止每一个a元素点击之后的默认跳转
    for (let el of aEls) {
      el.addEventListener('click', e => {
        e.preventDefault();
        const href = el.getAttribute('href');
        history.pushState({}, '', href);
        changeUrl();
      })
    }

    //监听点击浏览器的后退按钮
    window.addEventListener('popstate', () => {
      console.log('popState');
      changeUrl();
    });
    window.addEventListener('go', () => {
      console.log('go');
      changeUrl();
    });
    window.addEventListener('back', () => {
      console.log('back');
      changeUrl();
    });
  
    function changeUrl() {
      const path = location.pathname;
      if (path === '/about') {
        console.log('showme');
        routerView.innerHTML = 'About';
      } else {
        routerView.innerHTML = 'Home';
      }
    }
    ```


- 自己来监听 url 的改变，并且改变之后自己改变页面的内容
