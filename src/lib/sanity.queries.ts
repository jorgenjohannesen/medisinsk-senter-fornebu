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
      descriptionRaw
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
      previewRaw
      bodyRaw
    }
  }
`)

export const ContactInformationQuery = graphql(/* GraphQL */ `
  query contactInformation {
    allContactInformation {
      _id
      address
      phone
      openingHours
    }
  }
`)

export const AllServicesQuery = graphql(/* GraphQL */ `
  query allService {
    allService {
      _id
      name
      descriptionRaw
    }
  }
`)
