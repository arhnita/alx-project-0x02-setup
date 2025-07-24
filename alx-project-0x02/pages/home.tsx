import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { Post } from "@/interfaces";
import { useState } from "react";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCreatePost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
    };

    //spreads the original existing posts, them adds the new post
    setPosts([...posts, newPost]);
  };
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-md"
          >
            Create Post
          </button>
        </div>

        {posts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((posts) => (
                <Card key={posts.id} title={posts.title} content={posts.content}/>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Welcome"
            content="This is a reusable card component demonstrating props in Next.js with TypeScript."
          />
          <Card
            title="Features"
            content="Our application includes routing, TypeScript interfaces, and Tailwind CSS styling."
          />
          <Card
            title="Next Steps"
            content="Continue building more components and exploring Next.js capabilities."
          />
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default HomePage;
