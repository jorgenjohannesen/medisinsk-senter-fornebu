import dotenv from 'dotenv'
import { request } from 'graphql-request'
import type { InferGetStaticPropsType } from 'next'
import React, { useRef, useState } from 'react'

import Contact from '~/components/Contact'
import Employees from '~/components/Employees'
import Home from '~/components/Home'
import ImportantInfoPage from '~/components/ImportantInfoPage'
import InformationCard from '~/components/InformationCard'
import Navbar from '~/components/Navbar'
import Services from '~/components/Services'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  AllEmployeesQuery,
  AllNewsQuery,
  AllServicesQuery,
  ContactInformationQuery,
} from '~/lib/sanity.queries'
import contactInformation from '~/schemas/contactInformation'

dotenv.config()
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  // Fetch dynamic data here
  const employees = await request(GRAPHQL_ENDPOINT, AllEmployeesQuery)
  const news = await request(GRAPHQL_ENDPOINT, AllNewsQuery)
  const contactInformation = await request(
    GRAPHQL_ENDPOINT,
    ContactInformationQuery,
  )
  const services = await request(GRAPHQL_ENDPOINT, AllServicesQuery)

  return {
    props: {
      employees: employees.allEmployee,
      news: news.allNews,
      contactInformation: contactInformation.allContactInformation,
      services: services.allService,
      draftMode,
      token: draftMode ? readToken : '',
    },
    revalidate: 1,
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [showImportantInfo, setShowImportantInfo] = useState(false)

  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const employeesRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <Navbar
      contactInformation={props.contactInformation}
      onHomeClick={() => {
        setShowImportantInfo(false)
        scrollToRef(homeRef)
      }}
      onServicesClick={() => scrollToRef(servicesRef)}
      onEmployeesClick={() => scrollToRef(employeesRef)}
      onContactClick={() => scrollToRef(contactRef)}
      onImportantInfoClick={(shouldScrollToTop: any) => {
        setShowImportantInfo(true)
        if (shouldScrollToTop) {
          window.scrollTo({ top: 0, behavior: 'auto' })
        }
      }}
    >
      {showImportantInfo ? (
        <ImportantInfoPage news={props.news} />
      ) : (
        <>
          <div ref={homeRef}>
            <Home
              notifications={props.news}
              onHomeClick={() => {
                setShowImportantInfo(false)
                scrollToRef(homeRef)
              }}
              onImportantInfoClick={(shouldScrollToTop: any) => {
                setShowImportantInfo(true)
                if (shouldScrollToTop) {
                  window.scrollTo({ top: 0, behavior: 'auto' })
                }
              }}
            />
          </div>
          <InformationCard
            contactInformation={props.contactInformation}
            onEmployeesClick={() => scrollToRef(employeesRef)}
          />
          <div ref={servicesRef}>
            <Services services={props.services} />
          </div>
          <div ref={employeesRef}>
            <Employees employees={props.employees} />
          </div>
          <div ref={contactRef}>
            <Contact contactInformation={props.contactInformation} />
          </div>
        </>
      )}
    </Navbar>
  )
}
