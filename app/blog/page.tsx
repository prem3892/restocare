'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography } from '@/typography/typography';
import { BlogData } from '@/variant/blog.variant';

export default function Page() {
  const [index, setIndex] = useState<number | null>(0);
  const activeBlog = index !== null ? BlogData[index] : null;

  // When selected blog changes → scroll to top smoothly
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [index]);

  return (
    <>
      <h1 className="bg-gray-100 text-black text-2xl font-semibold text-center py-5 ">
        Read Blogs
      </h1>
      <div className="p-4 w-full bg-gray-100 text-black flex flex-col md:flex-row gap-4">
        {/* LEFT PANEL */}
        <div className="w-full md:w-[70%] rounded space-y-3">
          {activeBlog ? (
            <>
              <Image
                src={activeBlog.img}
                alt={activeBlog.title}
                width={500}
                height={500}
                className="w-full h-auto rounded object-cover"
              />

              <Typography element="h1" text={activeBlog.title} />
              <Typography element="p" text={activeBlog.content} />
              <Typography element="p" text={`Published: ${activeBlog.date}`} />
            </>
          ) : (
            <Typography element="p" text="Select a blog from the right panel." />
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-[30%] bg-zinc-200 px-2 py-1 rounded">
          <Typography
            element="h1"
            text="Recent Blogs"
            className="text-lg md:text-xl font-semibold text-red-600"
          />

          <div className="flex flex-col gap-3 mt-3">
            {BlogData.map((blog, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="bg-white p-2 rounded shadow flex gap-3 items-start
                text-left hover:shadow-md transition"
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
                <Typography element="h2" text={blog.title} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
