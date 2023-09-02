

import useGetAllBlogs from '@/hooks/getAllBlogs';
import React from 'react';

const BlogsTable = () => {

    const { isLoading, data } = useGetAllBlogs()


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
                    {data && data?.length && data.map((blog) => {
                        return (<tr key={blog?.id}>
                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                <span> {blog?.title}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                {blog?.userId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                {blog?.url}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                                Row 1, Column 2
                            </td>
                        </tr>)
                    })}

                </tbody>

            </table>
        </div>
    );
};

export default BlogsTable;
