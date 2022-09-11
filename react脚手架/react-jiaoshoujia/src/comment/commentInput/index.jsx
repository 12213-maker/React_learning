import React, { PureComponent } from 'react'
import { Input , Button } from 'antd';
import EventEmitter from 'events';
import moment from 'moment';
const { TextArea } = Input;
const EventBus = new EventEmitter()


export default class CommentItem extends PureComponent {
  constructor(){
    super()
    this.state={
      comment:'',
    }
  }
  render() {
    const {comment} = this.state
    return (
     <div style={{width:'500px',padding:'20px'}}>
     <TextArea onChange={(e)=>this.onTextAreaChange(e)} value={comment} rows={4} />
     <Button onClick={e=>this.onButtonClick()} style={{marginTop:'10px'}} type='primary'>添加评论</Button>
     </div>
    )
  }
  onTextAreaChange(event){
    this.setState({
      comment:event.target.value
    })
  }
  onButtonClick(){
    const commonInfo = {
      id:moment().valueOf(),
      avatar:'https://avatars.githubusercontent.com/u/78588975?s=96&v=4',
      nickname:'mushroom',
      datetime:moment(),
      content:this.state.comment
    }
    this.props.submitComment(commonInfo)
    this.setState({
      comment:'',
    })
  }
}
