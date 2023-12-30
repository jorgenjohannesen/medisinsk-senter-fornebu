import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'

export default function Contact({ contactInformation }) {
  const { language } = useLanguage()

  const emergencyContacts = [
    {
      title:
        language === 'no' ? 'Medisinsk nødtelefon' : 'Medical emergency phone',
      number: '113',
      description:
        language === 'no'
          ? 'Ved livstruende situasjoner, akutte brystsmerter, akutte vansker med å prate, smile eller løfte armene'
          : 'In life-threatening situations, acute chest pains, acute difficulty speaking, smiling, or lifting arms',
    },
    {
      title:
        language === 'no' ? 'Legevaktsentralen' : 'Emergency medical center',
      number: '116117',
      description:
        language === 'no'
          ? 'For problemer som ikke kan vente til neste dag. NB! Legevakten har en svært belastet telefon, ikke ring om ting ikke haster'
          : "For problems that cannot wait until the next day. Note! The emergency room has a very busy phone line, do not call if it's not urgent",
    },
    {
      title: language === 'no' ? 'Legekontoret' : "The doctor's office",
      number: '675 90 636',
      description:
        language === 'no'
          ? 'Vi er førstevalget på dagtid, også ved mindre skader og kutt'
          : 'We are the first choice during daytime, also for minor injuries and cuts',
    },
  ]

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-normal text-primary px-44 text-left self-start mt-28">
        {language === 'no'
          ? 'Trenger du øyeblikkelig hjelp'
          : 'Do you need immediate help'}
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
