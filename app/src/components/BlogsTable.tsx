import useGetAllBlogs from "@/hooks/getAllBlogs";
import React from "react";

const BlogsTable = () => {
  const { data } = useGetAllBlogs();

  return (
    <div className="container mx-auto px-4">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr>
            <th className="p-6 border-b-[1px] border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="p-6 border-b-[1px] border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Author
            </th>
            <th className="p-6 border-b-[1px] border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Url
            </th>
            <th className="p-6 border-b-[1px] border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
            {/* Add more header columns as needed */}
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.length &&
            data.map((blog) => {
              return (
                <tr key={blog?.id} className="border-b border-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-xs font-light"> {blog?.title}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex flex-row justify-start">
                    <div className="relative rounded-full px-1 py-1 text-xs text-center leading-6 text-gray-600 ring-1 ring-gray-900/10">
                      {blog?.userId}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <code className="cursor-pointer font-mono text-xs border-gray-300 bg-gradient-to-b from-zinc-200 p-1 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:rounded-md lg:border lg:bg-gray-200 lg:p-1 lg:dark:bg-zinc-800/30">
                      {blog?.url}
                    </code>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Delete Post
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogsTable;
