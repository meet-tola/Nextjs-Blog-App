import Link from "next/link";
import Image from "next/image";
import { posts } from "../data/posts";

const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="bg-white p-4 rounded-md shadow-md"
          >
            <div className="h-40 w-full mb-4">
              <Image
                src={post.image}
                alt="blog"
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>Written by: {post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
