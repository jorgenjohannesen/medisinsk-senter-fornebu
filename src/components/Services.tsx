import React from 'react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'
const services = [
  'Akupunktur',
  'Psykolog',
  'Helsestjenester for bedrifter',
  'Reisemedisin og vaksiner',
  'Dykkemedisin',
  'Idrettsmedisin',
  'Fysioterapi',
  'Petroleums- og sjømannslege',
]

export default function Services() {
  const { language } = useLanguage()
  return (
    <div className="services-layout h-5/6 bg-white flex flex-col p-4">
      <div className="header mb-10 pt-20 px-44 text-primary">
        <h1 className="text-3xl w-3/4" style={{ fontWeight: 400 }}>
          {language === 'no'
            ? 'I tillegg til vår fastlegekonsultasjon kan vi også hjelpe med en rekke andre tjenester'
            : 'In addition to our general practitioner consultation, we can also help with a number of other services'}{' '}
        </h1>
      </div>
      <div className=" mt-16 cards-container grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto w-1/2 pb-28">
        {services.map((service) => (
          <Card
            key={service}
            className="bg-white text-card-foreground shadow-lg rounded-lg border"
            style={{
              boxShadow:
                '0 -4px 10px -2px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardContent className="flex justify-center items-center p-6">
              <CardTitle className="text-2xl font-base leading-none tracking-tight">
                {service}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
