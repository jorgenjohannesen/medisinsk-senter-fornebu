import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const emergencyContacts = [
  {
    title: 'Medisinsk nødtelefon',
    number: '113',
    description:
      'Ved livstruende situasjoner, akutte brystsmerter, akutte vansker med å prate, smile eller løfte armene',
  },
  {
    title: 'Legevaktsentralen',
    number: '116117',
    description:
      'For problemer som ikke kan vente til neste dag. NB! Legevakten har en svært belastet telefon, ikke ring om ting ikke haster',
  },
  {
    title: 'Legekontoret',
    number: '675 90 636',
    description: 'Vi er førstevalget på dagtid, også ved mindre skader og kutt',
  },
]

export default function Contact() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-normal text-primary px-44 text-left self-start mt-28">
        Trenger du øyeblikkelig hjelp
      </h1>
      <div className="flex flex-col w-1/2 py-16 gap-8 mb-12">
        {emergencyContacts.map((contact, index) => (
          <Card
            key={index}
            className="mb-4 w-full bg-primary rounded-lg shadow-md overflow-hidden h-44 flex"
          >
            <CardContent className="flex justify-start p-8 items-center">
              <div className="flex-none flex items-center justify-center p-2 bg-white w-64 rounded-lg h-28">
                <CardHeader className="text-primary font-bold text-3xl">
                  {contact.number}
                </CardHeader>
              </div>
              <div className="flex-grow p-6">
                <CardTitle className="text-3xl text-white mb-6">
                  {contact.title}
                </CardTitle>
                <CardDescription className="text-white text-base">
                  {contact.description}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
