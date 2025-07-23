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
    setPosts([...posts, newPost]);
  };
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
          <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Create Post
          </button>
        </div>

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
      isOpen = {isModalOpen} 
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default HomePage;
