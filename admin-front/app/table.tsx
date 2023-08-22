"use client"

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface Blogs {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  slug:string
  url:string
  createdAt:string
  updatedAt:string
  expiredAt:string
}

export default async function BlogsTable({ blogs }: { blogs: Blogs[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Slug</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell>{blog.title}</TableCell>
            <TableCell>
              <Text>{blog.slug}</Text>
            </TableCell>
            <TableCell>
              <Text>{blog.url}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
