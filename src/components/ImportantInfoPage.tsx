import { PortableText } from '@portabletext/react'
import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'

import Contact from './Contact'

export default function ImportantInfoPage({ news }) {
  const { language } = useLanguage()

  return (
    <div className=" bg-white flex flex-col">
      <div className="bg-secondary min-h-screen">
        <h1 className="text-3xl font-normal text-primary px-44 text-left self-start mt-16 mb-8">
          {language === 'no' ? 'Viktig informasjon' : 'Important information'}
          Viktig informasjon
        </h1>
        <div className=" flex flex-col items-center mb-12">
          {news.map((notification, index) => (
            <Card
              key={index}
              className="m-4 w-1/2 bg-white bg-opacity-50 rounded-lg mx-2"
            >
              <CardHeader className="flex flex-row justify-between items-center p-2 mt-2 ml-2 text-primary">
                <CardTitle>{notification.title}</CardTitle>
                <img className="h-6 mr-4" src={'/bell-red.svg'} alt={'bell'} />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-primary prose">
                  <PortableText value={notification.previewRaw} />
                </CardDescription>
                <Button
                  variant={'outline'}
                  onClick={undefined}
                  className="bg-white text-base text-primary hover:bg-white-600 w-1/4 mt-4 shadow-md bg-opacity-100"
                  size={'lg'}
                >
                  {language === 'no' ? 'Les mer' : 'Read more'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Contact contactInformation={undefined} />
    </div>
  )
}
