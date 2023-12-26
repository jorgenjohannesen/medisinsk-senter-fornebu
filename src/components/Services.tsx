import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import ServiceDialog from './ServiceDialog'

interface Service {
  title: string
  description: string
  doctorName: string
  number: string
  email: string
  clinicNumber: string
}

const services = [
  {
    title: 'Akupunktur',
    description:
      'Yngve Røe er autorisert fysioterapeut med kommunal driftstilskuddsavtale. I tillegg til lang erfaring med å behandle pasienter, har han en hovedfagsgrad (Cand. San) og en doktorgrad (PhD) fra Universitetet i Oslo. Det legges vekt på at den behandlingen du får som pasient er kunnskapsbasert, det vil si at både dine egne erfaringer med smertene/plagene og oppdatert forskningskunnskap får betydning for den behandlingsplanen som settes opp. Behandlingen som gis er øvelser, ofte supplert med tøyninger. Andre behandlingstyper vil kun unntaksvis bli benyttet.',
    doctorName: 'Yngve Røe',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
  {
    title: 'Psykolog',
    description: 'Detailed description of Akupunktur service.',
    doctorName: 'Dr. Hansen',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
  {
    title: 'Akupunktur',
    description: 'Detailed description of Akupunktur service.',
    doctorName: 'Dr. Hansen',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
  {
    title: 'Akupunktur',
    description: 'Detailed description of Akupunktur service.',
    doctorName: 'Dr. Hansen',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
  {
    title: 'Akupunktur',
    description: 'Detailed description of Akupunktur service.',
    doctorName: 'Dr. Hansen',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
  {
    title: 'Akupunktur',
    description: 'Detailed description of Akupunktur service.',
    doctorName: 'Dr. Hansen',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
  {
    title: 'Akupunktur',
    description: 'Detailed description of Akupunktur service.',
    doctorName: 'Dr. Hansen',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
  {
    title: 'Akupunktur',
    description: 'Detailed description of Akupunktur service.',
    doctorName: 'Dr. Hansen',
    number: '123456789',
    email: 'hansen@example.com',
    clinicNumber: '987654321',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleCardClick = (service: any) => {
    setSelectedService(service)
  }

  return (
    <div className="services-layout h-5/6 bg-white flex flex-col p-4">
      <div className="header mb-10 pt-20 px-44 text-primary">
        <h1 className="text-3xl" style={{ fontWeight: 400 }}>
          I tillegg til vår fastlegekonsultasjon kan vi også hjelpe
        </h1>
        <h1 className="text-3xl" style={{ fontWeight: 400 }}>
          med en rekke andre tjenester
        </h1>
      </div>
      <div className=" mt-16 cards-container grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto w-1/2 pb-28">
        {services.map((service) => (
          <Card
            key={service.title}
            className="bg-white text-card-foreground shadow-lg rounded-lg border cursor-pointer"
            onClick={() => handleCardClick(service)}
            style={{
              boxShadow:
                '0 -4px 10px -2px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <CardContent className="flex justify-center items-center p-6">
              <CardTitle className="text-2xl font-base leading-none tracking-tight">
                {service.title}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedService && (
        <ServiceDialog
          isOpen={!!selectedService}
          onDismiss={() => setSelectedService(null)}
          dialogTitle={selectedService.title}
          dialogDescription={selectedService.description}
          doctorName={selectedService.doctorName}
          number={selectedService.number}
          email={selectedService.email}
          clinicNumber={selectedService.clinicNumber}
        />
      )}
    </div>
  )
}
