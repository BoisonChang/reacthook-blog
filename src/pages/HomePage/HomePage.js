import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HashRouter as Router , Routes ,Route, Link} from 'react-router-dom';
import { getPosts } from '../../WebAPI'

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`

const PostContainer = styled.div`
  border-bottom: 1px solid rgba(0,12,34,.2);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const PostTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`

const PostDate = styled.div`
  color: rgba(0,0,0,.8);
`

function Post( {post} ){
  return (
    <PostContainer>
      <PostTitle as={Link} to={`/posts/${post.id}`} >{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

export default function HomePage() { 
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then( posts => { setPosts(posts) })
  }, [])

  return (
    <Root> 
      {posts.map(post => <Post key={post.id} post={post} />)}
    </Root>
  );
}

