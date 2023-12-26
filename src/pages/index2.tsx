import dotenv from 'dotenv'
import { request } from 'graphql-request'
import React from 'react'

import Card from '~/components/Card'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { AllEmployeesQuery, AllPostsQuery } from '~/lib/sanity.queries'

dotenv.config()

// This file is for demonstration purposes only. It is not used in the final.
//TODO: Remove this file.
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  // Perform the GraphQL query in getStaticProps
  const posts = await request(GRAPHQL_ENDPOINT, AllPostsQuery)
  const employees = await request(GRAPHQL_ENDPOINT, AllEmployeesQuery)

  return {
    props: {
      posts: posts.allPost,
      employees: employees.allEmployee,
      draftMode,
      token: draftMode ? readToken : '',
    },
    revalidate: 1, // Set appropriate revalidation time
  }
}

export default function IndexPage({ posts, employees }) {
  // Render the posts passed as props
  return (
    <div className="">
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
      {employees.map((employee) => (
        <p key={employee._id}>{employee.description}</p>
      ))}
    </div>
  )
}
