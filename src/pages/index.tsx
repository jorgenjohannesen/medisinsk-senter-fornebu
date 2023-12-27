import React, { useState, useRef } from 'react'
import type { InferGetStaticPropsType } from 'next'

import Contact from '~/components/Contact'
import Employees from '~/components/Employees'
import Home from '~/components/Home'
import InformationCard from '~/components/InformationCard'
import Navbar from '~/components/Navbar'
import Services from '~/components/Services'
import ImportantInfoPage from '~/components/ImportantInfoPage'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'

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
        <ImportantInfoPage />
      ) : (
        <>
          <div ref={homeRef}>
            <Home />
          </div>
          <InformationCard onEmployeesClick={() => scrollToRef(employeesRef)} />
          <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={employeesRef}>
            <Employees />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </>
      )}
    </Navbar>
  )
}
