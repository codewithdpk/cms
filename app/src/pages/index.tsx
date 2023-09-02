import Page from '@/components/Page'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'


export default function Home() {

  const { data: session } = useSession()

  return (
    <Page title="Home">
     
       
        <div >
          <p>
            Access token&nbsp;
            <code >{session?.accessToken}</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
               
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        
          {!session &&
            <button onClick={() => signIn()}>
              Login
            </button>
          }
     
   
    </Page>
  )
}
