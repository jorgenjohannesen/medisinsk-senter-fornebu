import type { InferGetStaticPropsType } from 'next'
import React, { RefObject, useRef } from 'react'

import Contact from '~/components/Contact'
import Employees from '~/components/Employees'
import Home from '~/components/Home'
import InformationCard from '~/components/InformationCard'
import Navbar from '~/components/Navbar'
import Services from '~/components/Services'
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
  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const employeesRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToRef = (ref: RefObject<HTMLDivElement>) =>
    ref.current &&
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })

  return (
    <Navbar
      onHomeClick={() => scrollToRef(homeRef)}
      onServicesClick={() => scrollToRef(servicesRef)}
      onEmployeesClick={() => scrollToRef(employeesRef)}
      onContactClick={() => scrollToRef(contactRef)}
    >
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
    </Navbar>
  )
}
