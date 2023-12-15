import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
  return (
    <div className="services-layout h-screen bg-white flex flex-col p-4">
      <div className="header mb-10 pt-20 px-44 text-primary font-medium">
        <h1 className="text-2xl">
          I tillegg til vår fastlegekonsultasjon kan vi også hjelpe{' '}
        </h1>
        <h1 className="text-2xl">med en rekke andre tjenester</h1>
      </div>
      <div className=" mt-16 cards-container grid grid-cols-2 gap-4 mx-auto w-7/12">
        {services.map((service) => (
          <Card
            key={service}
            className="bg-white text-card-foreground shadow-lg rounded-lg border"
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
