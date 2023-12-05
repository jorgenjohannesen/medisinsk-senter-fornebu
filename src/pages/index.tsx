import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Employees from '~/components/Employees'
import InformationCard from '~/components/InformationCard'
import Navbar from '~/components/Navbar'
import Services from '~/components/Services'
import Home from '~/components/Home'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, postsQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Contact from '~/components/Contact'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  return (
    <Navbar>
      <Home />
      <InformationCard />
      <Services />
      <Employees />
      <Contact />
    </Navbar>
  )
}
