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
import { useLanguage } from '~/context/LanguageContext'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  AllEmployeesQuery,
  AllNewsQuery,
  AllServicesQuery,
  ContactInformationQuery,
} from '~/lib/sanity.queries'

dotenv.config()
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT!

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  // Fetch dynamic data here
  const employeesNO = await request(GRAPHQL_ENDPOINT, AllEmployeesQuery, {
    language: 'no',
  })
  const employeesEN = await request(GRAPHQL_ENDPOINT, AllEmployeesQuery, {
    language: 'en',
  })
  const newsNO = await request(GRAPHQL_ENDPOINT, AllNewsQuery, {
    language: 'no',
  })
  const newsEN = await request(GRAPHQL_ENDPOINT, AllNewsQuery, {
    language: 'en',
  })
  const contactInformationNO = await request(
    GRAPHQL_ENDPOINT,
    ContactInformationQuery,
    { language: 'no' },
  )
  const contactInformationEN = await request(
    GRAPHQL_ENDPOINT,
    ContactInformationQuery,
    { language: 'en' },
  )
  const servicesNO = await request(GRAPHQL_ENDPOINT, AllServicesQuery, {
    language: 'no',
  })
  const servicesEN = await request(GRAPHQL_ENDPOINT, AllServicesQuery, {
    language: 'en',
  })

  return {
    props: {
      employeesNO: employeesNO.allEmployee,
      employeesEN: employeesEN.allEmployee,
      newsNO: newsNO.allNews,
      newsEN: newsEN.allNews,
      contactInformationNO: contactInformationNO.allContactInformation,
      contactInformationEN: contactInformationEN.allContactInformation,
      servicesNO: servicesNO.allService,
      servicesEN: servicesEN.allService,
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

  const { language } = useLanguage()

  const employees =
    props.employeesEN && language === 'en'
      ? props.employeesEN
      : props.employeesNO
  const news = props.newsEN && language === 'en' ? props.newsEN : props.newsNO
  const contactInformation =
    props.contactInformationEN && language === 'en'
      ? props.contactInformationEN
      : props.contactInformationNO
  const services =
    props.servicesEN && language === 'en' ? props.servicesEN : props.servicesNO

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
      contactInformation={contactInformation}
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
        <ImportantInfoPage news={news} />
      ) : (
        <>
          <div ref={homeRef}>
            <Home notifications={news} />
          </div>
          <InformationCard
            contactInformation={contactInformation}
            onEmployeesClick={() => scrollToRef(employeesRef)}
          />
          <div ref={servicesRef}>
            <Services services={services} />
          </div>
          <div ref={employeesRef}>
            <Employees employees={employees} />
          </div>
          <div ref={contactRef}>
            <Contact contactInformation={contactInformation} />
          </div>
        </>
      )}
    </Navbar>
  )
}
