import axios from "axios";

export async function useFetchPosts(page: number) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 10,
          _page: page,
        }
      }
    );
    return response.data
}