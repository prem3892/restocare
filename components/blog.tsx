import { Typography } from '@/typography/typography';
import { BlogData } from '@/variant/blog.variant';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

function Blog() {
  return (
    <section className="bg-gray-200 w-full flex justify-center py-5 px-4">
      <div className="w-full md:w-7/8">
        {/* Title */}
        <Typography
          element="h2"
          text="Blog"
          className="text-2xl font-bold text-center text-black mb-5"
        />

        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-40">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <Typography
                    element="h3"
                    text={blog.title}
                    className="text-md md:text-lg font-semibold text-gray-800"
                  />

                  <Typography
                    element="p"
                    text={blog.content}
                    className="text-gray-800 text-sm line-clamp-3"
                  />
                </div>

                {/* Button + Date */}

                <div className="mt-4">
                  <Link href="/blog">
                    <button className="text-red-800 text-md font-medium hover:underline flex items-center gap-1">
                      {blog.button} <span>»</span>
                    </button>
                  </Link>
                  <Typography
                    element="p"
                    text={blog.date}
                    className="text-gray-800 text-xs border-t pt-1 mt-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Blog);
