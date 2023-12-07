import { useQuery } from '@tanstack/react-query'
import dotenv from 'dotenv'
import { request } from 'graphql-request'
import type { InferGetStaticPropsType } from 'next'
import React from 'react'

import Card from '~/components/Card'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { AllPostsQuery } from '~/lib/sanity.queries'

dotenv.config()

// This file is for demonstration purposes only. It is not used in the final.
//TODO: Remove this file.
const GRAPHQL_ENPOINT = process.env.GRAPHQL_ENDPOINT!

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
    },
    revalidate: 1,
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { data } = useQuery({
    queryKey: 'allPosts',
    queryFn: async () => {
      const response = await request(GRAPHQL_ENPOINT, AllPostsQuery)
      return response.allPost
    },
  })

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((post) => <Card key={post._id} post={post} />)}
    </div>
  )
}
