"use client"

import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import BlogsTable from './table';
import useGetAllBlogs from '../hooks/useGetAllBlogs';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  const { data } = useGetAllBlogs()

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <Search />
      <Card className="mt-6">
        {data && data.length && <BlogsTable blogs={data} />}
      </Card>
    </main>
  );
}
