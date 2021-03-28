import moment from 'moment'
import React from 'react'
import { useHistory } from 'react-router'
import './Post.css'


function Post({ post: { points, title, id, comments, author, date } }) {
    const history = useHistory()
    // console.log(post);
    return (
        <div className='post' onClick={() => history.push(`/${id}`)}>
            <h4>{title}</h4>
            <div>
                <span>{points} points</span>|
                <span>{author.toUpperCase()}</span>|
                <span>{moment(date).fromNow()}</span>|
                <span>{comments.length} comments</span>
            </div>

        </div>
    )
}

export default Post
