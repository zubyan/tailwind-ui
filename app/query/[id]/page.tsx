"use client";
import { getSinglePost } from "@/app/util/http";
import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: { params: { id: string } }) {
  const {
    data: post,
    isLoading,
    error,
  } = useQuery(getSinglePost(params.id as string));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading post</p>;

  return (
    <div>
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
