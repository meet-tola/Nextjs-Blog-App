import Comments from "@/app/components/Comment";
import FormComment from "@/app/components/FormComment";
import Image from "next/image";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold">Post One</h1>
        <p>Written by: Tola</p>
        <div className="h-60 w-full mb-4 mt-6">
              <Image
                src='/assets/image.jpg'
                alt="blog"
                width={100}
                height={100}
                className="object-cover h-full w-full"
              />
            </div>
        <div className="mt-4">
         Certainly! To make the image container fit the width of the div and have a specific height, you can use the following Tailwind CSS classes:   
        </div>

        <Comments />
        <FormComment />
    </div>
  )
}

export default BlogDetailPage
