import React, { PureComponent } from 'react'
import axios from 'axios'
import ContextLearn from './ContextFun'
import ContextClass from './ContextClass'

//这样可以修改axios的默认配置
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common['token'] = '46354';
axios.defaults.headers.post["Content-type"] = 'application/text';

export default class App extends PureComponent {

  async componentDidMount() {
    // axios({
    //   url: 'http://httpbin.org/get',
    //   method: 'get',
    //   params: {
    //     name: 'why',
    //     age: 18
    //   }
    // }).then(
    //   (res) => { console.log(res); },
    //   (err) => { console.log(err); }
    // )


    // axios.get("http://httpbin.org/get", {
    //   params: {
    //     name: 'why',
    //     age: 18
    //   }
    // }).then(
    //   (res) => { console.log(res); },
    //   (err) => { console.log(err); }
    // )


    // axios.post('http://httpbin.org/post',{
    //   data:{
    //     name: 'why',
    //     age: 18
    //   }
    // }).then(
    //   (res) => { console.log(res);},
    //   (err) => { console.log(err);}
    //   )


    //当我们想要捕获错误的时候就可以使用try catch
    try {
      const result = await axios.post('http://httpbin.org/post', {
        data: {
          name: 'why',
          age: 18
        }
      })

      console.log(result);
    } catch (err) {
      console.log(err);
    }


  }

  render() {
    return (
      <div>
        <ContextLearn></ContextLearn>
        <ContextClass></ContextClass>
      </div>
    )
  }
}
