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
    <div className="bg-white flex flex-col items-center justify-center lg:pb-4">
      <h1 className="lg:text-3xl md:text-3xl text-2xl font-medium text-primary lg:px-44 md:px-20 px-4 text-left self-start md:mt-16 mt-8 lg:pt-4">
        {language === 'no'
          ? 'Trenger du øyeblikkelig hjelp'
          : 'Do you need immediate help'}
      </h1>
      <div className="flex flex-col md:w-1/2 md:w-[600px] lg:w-1/2 w-11/12 md:py-16 py-6 md:gap-8 gap-2">
        {emergencyContacts.map((contact, index) => (
          <Card
            key={index}
            className="mb-4 w-full bg-primary rounded-lg shadow-md overflow-hidden lg:h-46 flex rounded-md"
          >
            <CardContent className="flex flex-col md:flex-row justify-start md:p-8 p-4 w-full">
              <div className="flex-grow md:pr-4">
                <CardTitle className="lg:text-3xl text-2xl text-white mb-4 md:mb-2">
                  {contact.title}
                </CardTitle>
                <CardDescription className="text-white text-sm md:text-base lg:mb-0 mb-4">
                  {contact.description}
                </CardDescription>
              </div>
              <div className="flex-none self-center  md:ml-auto w-[256px] h-[44px] md:h-28 bg-white rounded-lg flex items-center justify-center">
                <CardHeader className="text-primary font-medium md:text-3xl text-lg">
                  {contact.number}
                </CardHeader>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
