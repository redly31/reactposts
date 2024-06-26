import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

interface PostFormProps {
  createPost: (post: { title: string; body: string; id: number }) => void;
}

export default function PostForm({ createPost }: PostFormProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = () => {
    createPost({ title, body, id: Date.now() });
  };

  return (
    <Form>
      <Input
        placeholder="Название"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Содержание"
        onChange={(e) => setBody(e.target.value)}
      />
      <Button onClick={addNewPost}>Создать</Button>
    </Form>
  );
}
