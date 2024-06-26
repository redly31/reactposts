import { useMemo } from "react";
import { Posts } from "../pages/PostsPage";

export const useSortedPosts = (posts: Posts[], selectedSortType: string) => {
  const sortedPosts = useMemo(() => {
    if (selectedSortType) {
      return [...posts].sort((a, b) =>
        (a as any)[selectedSortType].localeCompare((b as any)[selectedSortType])
      );
    }
    return posts;
  }, [selectedSortType, posts]);
  return sortedPosts
};

export const usePosts = (
  posts: Posts[],
  selectedSortType: string,
  search: string
) => {
  const sortedPosts = useSortedPosts(posts, selectedSortType);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [sortedPosts, search]);

  return sortedAndSearchedPosts;
};
