import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Container, Icon, Header } from 'semantic-ui-react';
import Comments from '../components/Comments/Comments';
import HeaderC from '../components/Header/Header'

function PostDetail() {
    const params = useParams()
    const postDetail = useSelector(state => state.post.posts.find(post => post.id === +params.id))
    const { title, author, content, date, comments } = postDetail

    return (
        <>
            <HeaderC />
            <Container style={{ marginTop: 20 }}>
                <h2>{title}</h2>
                <span style={{ color: '#fd732a', paddingRight: 5 }}>{author.toUpperCase()}</span> |
                <Icon name="clock outline" size="large" />
                <span>
                    {(date.split("T")[0])}
                </span>
            </Container>
            <hr />
            <Container>
                <p>
                    {content}
                </p>
            </Container>
            <hr />
            <Container>
                <Header as='h3' dividing >
                    Comments ({comments ? comments.length : 0})
                </Header>
                <Comments comments={comments} />
            </Container>
        </>

    )
}

export default PostDetail
