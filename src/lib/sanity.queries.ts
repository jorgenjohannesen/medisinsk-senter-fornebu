import { Employee } from '~/gql/graphql'

import { graphql } from '../gql'

export const AllPostsQuery = graphql(/* GraphQL */ `
  query allPost($language: String!) {
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

// All employees but with dynamic language
export const AllEmployeesQuery = graphql(/* GraphQL */ `
  query allEmployee($language: String!) {
    allEmployee(where: { language: { eq: $language } }) {
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
  query allNews($language: String!) {
    allNews(where: { language: { eq: $language } }) {
      _id
      title
      previewRaw
      bodyRaw
    }
  }
`)

export const ContactInformationQuery = graphql(/* GraphQL */ `
  query contactInformation($language: String!) {
    allContactInformation(where: { language: { eq: $language } }) {
      _id
      address
      phone
      openingHours
    }
  }
`)

export const AllServicesQuery = graphql(/* GraphQL */ `
  query allService($language: String!) {
    allService(where: { language: { eq: $language } }) {
      _id
      name
      descriptionRaw
    }
  }
`)

export const PricesQuery = graphql(/* GraphQL */ `
  query prices {
    allPrices {
      _id
      pricePdf {
        asset {
          url
        }
      }
    }
  }
`)
