import React, { useState } from 'react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'
import { Service } from '~/gql/graphql'

import ServiceDialog from './ServiceDialog'

// const services = [
//   {
//     title: 'Akupunktur',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad (Cand. San) og en doktorgrad (PhD) fra Universitetet i Oslo. Det legges vekt på at den behandlingen du får som pasient er kunnskapsbasert, det vil si at både dine egne erfaringer med smertene/plagene og oppdatert forskningskunnskap får betydning for den behandlingsplanen som settes opp. Behandlingen som gis er øvelser, ofte supplert med tøyninger. Andre behandlingstyper vil kun unntaksvis bli benyttet. Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad (Cand. San) og en doktorgrad (PhD) fra Universitetet i Oslo. Det legges vekt på at den behandlingen du får som pasient er kunnskapsbasert, det vil si at både dine egne erfaringer med smertene/plagene og oppdatert forskningskunnskap får betydning for den behandlingsplanen som settes opp. Behandlingen som gis er øvelser, ofte supplert med tøyninger. Andre behandlingstyper vil kun unntaksvis bli benyttet.',
//     doctorName: 'Yngve Røe',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
//   {
//     title: 'Psykolog',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad',
//     doctorName: 'Dr. Hansen',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
//   {
//     title: 'Akupunktur',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad',
//     doctorName: 'Dr. Hansen',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
//   {
//     title: 'Akupunktur',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad',
//     doctorName: 'Dr. Hansen',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
//   {
//     title: 'Akupunktur',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad',
//     doctorName: 'Dr. Hansen',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
//   {
//     title: 'Akupunktur',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad',
//     doctorName: 'Dr. Hansen',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
//   {
//     title: 'Akupunktur',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad',
//     doctorName: 'Dr. Hansen',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
//   {
//     title: 'Akupunktur',
//     description:
//       'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad',
//     doctorName: 'Dr. Hansen',
//     number: '123456789',
//     email: 'hansen@example.com',
//     clinicNumber: '987654321',
//   },
// ]

export default function Services({ services }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleCardClick = (service: Service) => {
    setSelectedService(service)
  }
  const { language } = useLanguage()
  return (
    <div className="services-layout bg-white flex flex-col p-4">
      <div className="header mb-10 md:pt-20 pt-6 lg:px-44 md:px-20 px-4 text-primary">
        <h1
          className="lg:text-3xl md:text-3xl text-2xl w-full lg:w-3/4"
          style={{ fontWeight: 400 }}
        >
          {language === 'no'
            ? 'I tillegg til vår fastlegekonsultasjon kan vi også hjelpe med en rekke andre tjenester'
            : 'In addition to our general practitioner consultation, we can also help with a number of other services'}{' '}
        </h1>
      </div>
      <div className=" mt-16 cards-container grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto lg:w-1/2 w-full md:px-4 lg:px-0 pb-28">
        {services.map((service) => (
          <Card
            key={service.name}
            className="bg-white text-card-foreground shadow-lg rounded-lg border border border-primary cursor-pointer"
            onClick={() => handleCardClick(service)}
            style={{
              boxShadow:
                '0 -4px 10px -2px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardContent className="flex justify-center items-center p-6">
              <CardTitle className="text-2xl font-base leading-none tracking-tight">
                {service.name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedService && (
        <ServiceDialog
          isOpen={!!selectedService}
          onDismiss={() => setSelectedService(null)}
          dialogTitle={selectedService.name}
          dialogDescription={selectedService.descriptionRaw}
        />
      )}
    </div>
  )
}
