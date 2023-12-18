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

export const AllEmployeesQuery = graphql(/* GraphQL */ `
  query allEmployee {
    allEmployee {
      _id
      name
      description
      image {
        asset {
          url
        }
      }
    }
  }
`)

export const AllNewsQuery = graphql(/* GraphQL */ `
  query allNews {
    allNews {
      _id
      title
      preview
      body
    }
  }
`)

export const ContactInfoQuery = graphql(/* GraphQL */ `
  query contactInfo {
    contactInfo {
      _id
      address
      phone
      openingHours
    }
  }
`)
