import BlogsTable from '@/components/BlogsTable'
import Page from '@/components/Page'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'


export default function Home() {

  const { data: session } = useSession()

  return (
    <Page title="Home">


      <BlogsTable />
      {!session &&
        <button onClick={() => signIn()}>
          Login
        </button>
      }


    </Page>
  )
}
