import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'

import Card from '~/components/Card'
import Container from '~/components/Container'
import Welcome from '~/components/Welcome'
import { AllPostsQuery } from '~/lib/sanity.queries'

export default function Home() {
  const { data } = useQuery({
    queryKey: 'allPosts',
    queryFn: async () => {
      const response = await request(
        process.env.GRAPHQL_ENDPOINT,
        AllPostsQuery,
      )
      return response.allPost
    },
  })

  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => <Card key={post._id} post={post} />)}
      </div>
    </Container>
  )
}
