import React, { PureComponent } from 'react'
import EventEmitter from 'events'
import styled from 'styled-components'
import { DeleteOutlined, DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Tooltip } from 'antd';
import moment from 'moment';

const EventBus = new EventEmitter()

const CommentItemContainer = styled.div`
  &{
    /* display: flex;
    flex-direction: row; */
    padding-left: 20px;
  }
  .delete{
      cursor: pointer;
    }
  /* img{
    border-radius: 50%;
  }
  .contianer{
    padding-left: 10px;
    background-color: rgb(253, 253, 253);
    display: flex;
    flex-direction: column;
    color:rgb(153, 153, 153);
    .nickname{
      padding-right: 10px;
    }
    .content{
      font-size: 20px;
      color: rgb(90, 90, 90);
    }
    .delete{
      cursor: pointer;
    }
  } */
`

export default class CommentInput extends PureComponent {

  constructor() {
    super()
  }


  render() {

    const { id, nickname, avatar, content, datetime } = this.props
    return (
      // <CommentItemContainer>
      //   <img src={avatar} style={{width:'40px',height:'40px'}} alt="" />
      //   <div className='contianer'>
      //     <div className='nickname'>{`${nickname}  ${Date.now()-datetime}`}</div>
      //     <div className='content'>{content}</div>
      //     <div className='delete' onClick={e=>this.deleteitem()}><DeleteOutlined /> delete</div>
      //   </div>
      // </CommentItemContainer>

      <CommentItemContainer>
        <Comment
          author={<a>{nickname}</a>}
          avatar={<Avatar src={avatar} alt={nickname} />}
          content={
            <p>
              {content}
            </p>
          }

          //这些都是moment的效果太好用了把
          // datetime={<span>{datetime.format("YYYY-MM-DD HH:mm:ss")}</span>}
          datetime={
            <Tooltip color='red' placement="top" title={datetime.format("YYYY-MM-DD HH:mm:ss")}>
              <span>{datetime.fromNow()}</span>
            </Tooltip>

          }
          actions={[
            <div className='delete' onClick={e => this.deleteitem()}><DeleteOutlined /> delete</div>
          ]}
        />
      </CommentItemContainer>
    )
  }
  deleteitem() {
    this.props.deleteitem(this.props.id)
  }

}
