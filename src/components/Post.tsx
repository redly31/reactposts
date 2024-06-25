import styled from 'styled-components'


const StyledPost = styled.article`
  margin-top: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  p {
    margin-top: 15px;
  }
  

`
export interface Post {
  title: string;
  body: string;
  id: number;
}

export default function Post({post}: {post: Post}) {


  return (
    <StyledPost>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </StyledPost>
  )
}
