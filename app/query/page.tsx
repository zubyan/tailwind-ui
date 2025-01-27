"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../util/http";
import Link from "next/link";

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>
          <Link href={`/query/${post.id}`}>{post.id}</Link>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>
  );
}
