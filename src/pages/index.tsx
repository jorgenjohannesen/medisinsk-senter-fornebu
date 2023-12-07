import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'
import type { InferGetStaticPropsType } from 'next'
import React, { RefObject, useRef } from 'react'

import Card from '~/components/Card'
import Contact from '~/components/Contact'
import Container from '~/components/Container'
import Employees from '~/components/Employees'
import Home from '~/components/Home'
import InformationCard from '~/components/InformationCard'
import Navbar from '~/components/Navbar'
import Services from '~/components/Services'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { AllPostsQuery } from '~/lib/sanity.queries'

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

  const { data } = useQuery({
    queryKey: 'allPosts',
    queryFn: async () => {
      const response = await request(
        'https://bldcloyv.api.sanity.io/v1/graphql/production/default',
        AllPostsQuery,
      )
      return response.allPost
    },
  })

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
      <InformationCard />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={employeesRef}>
        <Employees />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => <Card key={post._id} post={post} />)}
      </div>
    </Navbar>
  )
}
