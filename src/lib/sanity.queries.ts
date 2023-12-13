import { graphql } from '../gql'

export const AllPostsQuery = graphql(/* GraphQL */ `
  query allPost {
    allPost {
      _id
      title
      slug {
        current
      }
      excerpt
      mainImage {
        asset {
          url
        }
      }
    }
  }
`)
