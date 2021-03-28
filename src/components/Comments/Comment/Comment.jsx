import moment from 'moment';
import React from 'react'
import { Comment } from 'semantic-ui-react';

function CommentComponent({ comment: { name, content, time, avt } }) {
    return (
        <Comment style={{ display: 'flex', marginTop: 10 }}>
            <Comment.Avatar src={avt} width="52px" height="52px" alt="" />
            <Comment.Content style={{ marginLeft: 10 }}>
                <Comment.Author as='a'>{name}</Comment.Author>
                <Comment.Metadata>
                    <i>{moment(time).fromNow()}</i>
                </Comment.Metadata>
                <Comment.Text>{content}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

export default CommentComponent
