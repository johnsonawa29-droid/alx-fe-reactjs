import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const Posts = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute cache
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={refetch}>
        Refetch Posts
      </button>

      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;