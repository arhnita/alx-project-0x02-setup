import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";

export async function getStaticProps(){
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json()

    return{
      props: {
        posts: posts.slice(0,12)
      },
      revalidate: 60 //Regenerate every 60 secons
    }
  } catch(error){
    console.error(error)
    return {
      props: {
        posts: []
      }
    }
  }
}

const Posts: React.FC<{posts: PostProps[]}> = ({ posts }) => {

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
