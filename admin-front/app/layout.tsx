"use client"

import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()

// export const metadata = {
//   title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
//   description:
//     'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
// };

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <Nav />
          </Suspense>
          {children}
          <Analytics />
          {/* <Toast /> */}
        </QueryClientProvider>
      </body>
    </html>
  );
}
