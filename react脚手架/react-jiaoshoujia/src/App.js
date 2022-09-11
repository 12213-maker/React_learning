import React, { PureComponent } from 'react'
import CommentItem from './comment/conmentItem'
import CommentInput from './comment/commentInput'

export default class App extends PureComponent {
  constructor(){
    super()
    this.state={
      list:[]
    }
  }
  render() {
    return (
      <>
        {/* <CommentItem></CommentItem> */}

        {
          this.state.list.map((item,index)=>{
            return (
              <CommentItem key={index} {...item} deleteitem={id=>{this.deleteitem(id)}}></CommentItem>
            )
          })
        }
        <CommentInput submitComment={this.submitComment.bind(this)}></CommentInput>
      </>
    )
  }
  submitComment(info){
    this.setState({
      list:[info,...this.state.list]
    })
  }
  deleteitem(id){
    const newlist = this.state.list.filter((item)=>{
      return item.id!==id
    })
    this.setState({
      list:newlist
    })
  }
}
