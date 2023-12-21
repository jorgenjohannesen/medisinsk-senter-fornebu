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
      <div className="text-3xl text-primary px-20 py-5 text-left self-start font-light">
        Trenger du øyeblikkelig hjelp
      </div>
      <div className="flex flex-col items-center mt-10 w-2/3 px-20 gap-y-8">
        {emergencyContacts.map((contact, index) => (
          <Card
            key={index}
            className="mb-4 w-full bg-primary rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex justify-start p-8 items-center">
              <div className="p-6 bg-white w-64">
                <span className="text-primary font-bold text-3xl w-64">
                  {contact.number}
                </span>
              </div>
              <div className="flex-grow p-6">
                <CardTitle className="font-bold text-xl text-white">
                  {contact.title}
                </CardTitle>
                <CardDescription className="text-white">
                  {contact.description}
                </CardDescription>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
