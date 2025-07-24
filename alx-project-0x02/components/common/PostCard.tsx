import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="bg-green-100 text-white shadow-md p-6 mb-4 transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-white font-semibold mb-3 leading-relaxed">{content}</p>
      <p className="text-white font-thin ">{userId}</p>
    </div>
  );
};

export default PostCard;
