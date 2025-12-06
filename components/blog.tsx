import { BlogData } from '@/variant/blog.variant';
import Image from 'next/image';

function Blog() {
  return (
    <section className="bg-gray-200 w-full flex justify-center py-5 px-4">
      {/* Section Title */}
      <div className="w-full md:w-7/8">
        <h2 className="text-2xl font-bold text-center text-black mb-5">Blog</h2>

        {/* Blog Grid */}
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image src={blog.img} alt={blog.title} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3">{blog.content}</p>
                </div>

                {/* Footer */}
                <div className="relative bottom-0 border-t border-gray-200">
                  <button className="text-red-500 font-medium hover:underline flex items-center gap-1">
                    {blog.button} <span>»</span>
                  </button>
                  <p className="text-gray-400 text-xs mt-3">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
