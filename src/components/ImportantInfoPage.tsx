import React from 'react'
import Contact from './Contact'
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const initialNotifications = [
  {
    title: 'Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
  {
    title: 'Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
  {
    title: 'Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
  {
    title: 'Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
]

export default function ImportantInfoPage() {
  return (
    <div className=" bg-white flex flex-col">
      <div className="bg-secondary min-h-screen">
        <h1 className="text-3xl font-normal text-primary px-44 text-left self-start mt-16 mb-8">
          Viktig informasjon
        </h1>
        <div className=" flex flex-col items-center mb-12">
          {initialNotifications.map((notification, index) => (
            <Card
              key={index}
              className="m-4 w-1/2 bg-white bg-opacity-50 rounded-lg mx-2"
            >
              <CardHeader className="flex flex-row justify-between items-center p-2 mt-2 ml-2 text-primary">
                <CardTitle>{notification.title}</CardTitle>
                <img className="h-6 mr-4" src={'/bell-red.svg'} alt={'bell'} />
              </CardHeader>
              <CardContent>
                <CardDescription className="text-primary">
                  {notification.description}
                </CardDescription>
                <Button
                  variant={'outline'}
                  onClick={undefined}
                  className="bg-white text-base text-primary hover:bg-white-600 w-1/4 mt-4 shadow-md bg-opacity-100"
                  size={'lg'}
                >
                  Les mer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  )
}
