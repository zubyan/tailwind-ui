import { queryOptions, QueryOptions } from "@tanstack/react-query";

export async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export function getSinglePost(id: string) {
  return queryOptions({
    queryKey: ["post", "detail", id],
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 5 * 1000,
  });
}
