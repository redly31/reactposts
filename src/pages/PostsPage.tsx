import styled from "styled-components";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import PostsList from "../components/PostsList";
import { useState } from "react";

const PostsPageTitle = styled.h1`
  margin-bottom: 10px;
`

export interface Posts {
  title: string;
  body: string;
  id: number;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = () => {
    console.log(title, body)
    setPosts([...posts, {title, body, id: Date.now()}])
  }
  console.log(posts)

  return (
    <section>
      <PostsPageTitle>Создать пост</PostsPageTitle>
      <Form>
        <Input placeholder="Название" onChange={e => setTitle(e.target.value)}/>
        <Input placeholder="Содержание" onChange={e => setBody(e.target.value)}/>
        <Button onClick={addNewPost}>Создать</Button>
      </Form>
      <PostsList posts={posts}/>
    </section>
  )
}
