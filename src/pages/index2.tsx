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
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  // Perform the GraphQL query in getStaticProps
  const response = await request(GRAPHQL_ENDPOINT, AllPostsQuery)

  return {
    props: {
      posts: response.allPost,
      draftMode,
      token: draftMode ? readToken : '',
    },
    revalidate: 1, // Set appropriate revalidation time
  }
}

export default function IndexPage({ posts }) {
  // Render the posts passed as props
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
    </div>
  )
}
