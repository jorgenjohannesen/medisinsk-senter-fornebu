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

const InformationCard = ({ onEmployeesClick }) => {
  const handleButtonClick = (onClickFunction: any) => {
    onClickFunction()
  }
  const { language } = useLanguage()

  return (
    <div className="relative w-full lg:h-[507px] mx-auto">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      <Card className="relative w-3/4 mx-auto bg-primary flex flex-row items-center lg:h-[507px]">
        <div className="w-1/2">
          <img
            className="lg:w-[454px] h-96 rounded-md ml-16"
            src="/test-img.png"
            alt="Person in office"
          />
        </div>
        <div className="text-white pl-24">
          <CardHeader>
            <CardTitle className="text-3xl">
              {language === 'no'
                ? 'Hos oss vil du bli tatt godt vare på'
                : 'We will take good care of you'}
            </CardTitle>
            <CardDescription className="text-white w-3/4 text-base pt-4">
              {language === 'no'
                ? 'Her på Medisinsk Senter Fornebu er vi en gjeng med dyktige ansatte som gjerne vil hjelpe deg.'
                : 'Here at Medisinsk Senter Fornebu we are a bunch of skilled employees who would love to help you.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row mb-4">
              <div className="flex flex-col mr-2">
                <span className="border-b border-white pb-1 w-28">
                  {language === 'no' ? 'Åpningstider:' : 'Opening hours:'}
                </span>
              </div>
              <div className="flex flex-col">
                <p>Mandag - Fredag 08:00 - 15:30.</p>
                <p>
                  {language === 'no'
                    ? 'Kveldstimer etter avtale'
                    : 'Evening hours by appointment'}
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-4">
              <div className="flex flex-col mr-2">
                <span className="border-b border-white pb-1 w-28">
                  {language === 'no' ? 'Telefon:' : 'Phone:'}
                </span>
              </div>
              <div className="flex flex-col">
                <p>+47 675 90 636</p>
                <p>Mandag - Fredag 08:45 - 11:00 og 12:00 - 15:00</p>
              </div>
            </div>
            <div className="flex flex-row mb-4">
              <div className="flex flex-col mr-2">
                <span className="border-b border-white pb-1 w-28">
                  Adresse:
                </span>
              </div>
              <div className="flex flex-col">
                <p>Forneburingen 209, 1364 Fornebu.</p>
                <p>Vi holder til inne på kjøpesenteret Fornebu S, bygg C.</p>
              </div>
            </div>
            <Button
              variant={'outline'}
              onClick={() => handleButtonClick(onEmployeesClick)}
              className="bg-primary text-base text-black hover:bg-primary-600 bg-white mt-4"
            >
              {language === 'no'
                ? 'Bli kjent med våre ansatte'
                : 'Our employees'}
              <img className="h-4 ml-2 w-6" src="/arrow-dark.svg" alt="arrow" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default InformationCard
