import styled from "styled-components";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import PostsList from "../components/PostsList";
import { useFetchPosts } from "../hooks/UseFetchPosts";
import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import { createPagesArray } from "../helpers/createPagesArray";
import SortSelect from "../components/Select";
import { usePosts } from "../hooks/UsePosts";

const PostsPageTitle = styled.h1`
  margin-bottom: 10px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  gap: 10px;
  height: 75px;
  align-items: center;
`;

export interface Posts {
  title: string;
  body: string;
  id: number;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [selectedSortType, setSelectedSortType] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const sortedAndSearchedPosts = usePosts(posts, selectedSortType, search)

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFetchPosts(page);
      setPosts(data);
      setTotalPages(Math.ceil(100 / 10));
    };
    fetchData();
  }, [page]);

  const createPost = (post: Posts) => {
    setPosts([...posts, post]);
  };

  const pagesArray = createPagesArray(totalPages)

  return (
    <section>
      <PostsPageTitle>Создать пост</PostsPageTitle>
      <PostForm createPost={createPost} />
      <Form>
        <Input
          placeholder="Поиск"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <SortSelect  
        selectedSortType={selectedSortType}
        setSelectedSortType={setSelectedSortType}
      />
      <PostsList posts={sortedAndSearchedPosts} />
      <PaginationWrapper>
        {pagesArray.map((p) => (
          <Button key={p} onClick={() => setPage(p)}>
            {p}
          </Button>
        ))}
      </PaginationWrapper>
    </section>
  );
}
