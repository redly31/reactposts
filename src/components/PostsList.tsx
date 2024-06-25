import styled from 'styled-components'
import Post from './Post'
import { Posts } from '../pages/PostsPage'


const StyledPostList = styled.section`
  margin-top: 20px;
`


export default function PostsList({posts}: {posts: Posts[]}) {
  return (
    <StyledPostList>
      {posts.map(post =>
        <Post post={post}/>
      )}
    </StyledPostList>
  )
}
