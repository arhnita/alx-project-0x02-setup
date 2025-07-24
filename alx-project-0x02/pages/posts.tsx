import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";
import { useState } from "react";
import { useEffect} from "react";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        //start the request

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        //check if successful
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        //parse json data
        const data = await response.json();

        //update state with data
        setPosts(data.slice(0, 12)); //limit to 12 posts
      } catch (err) {
        setError("Error fetching posts");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    //now mount once
    fetchPosts();
  }, []);

  if(loading) {
    return(
      <div>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading posts...</p>
          </div>
        </main>
      </div>
    )
  }

  if(error) {
    return (
      <div>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <h1 className="text-3xl text-white">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((posts) => (
          <PostCard key={posts.id} id={posts.id} title={posts.title} content={posts.content} userId={posts.userId}/>
        ))}
      </div>
    </div>
  );
};

export default Posts;
