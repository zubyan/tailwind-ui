"use client";
import { useQuery } from "@tanstack/react-query";
import fetchData from "@/app/util/http";

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });
  console.log(data);
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {data.map((post: any) => (
        <div>
          <p>{post.id}</p>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </>
  );
}
