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

const InformationCard = ({ onEmployeesClick, contactInformation }) => {
  const handleButtonClick = (onClickFunction: any) => {
    onClickFunction()
  }
  const { language } = useLanguage()
  const contactInfo = contactInformation[0]

  return (
    <div className="relative w-full mx-auto py-16">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      <Card className="relative md:w-5/6 w-11/12 mx-auto bg-primary flex flex-col lg:flex-row items-center lg:h-[539px]">
        <div className="w-full lg:w-1/2 lg:mt-0 p-6 lg:p-0">
          <img
            className="lg:h-96 object-cover rounded-md mx-auto lg:ml-16 w-full lg:w-auto"
            src="/test-img.png"
            alt="Person in office"
          />
        </div>
        <div className="text-white lg:pl-24  pt-2 md:pt-4 lg:pt-0">
          <CardHeader>
            <CardTitle className="md:text-3xl text-2xl">
              {language === 'no'
                ? 'Hos oss vil du bli tatt godt vare på'
                : 'We will take good care of you'}
            </CardTitle>
            <CardDescription className="text-white w-full lg:w-3/4 text-base pt-4">
              {language === 'no'
                ? 'Her på Medisinsk Senter Fornebu er vi en gjeng med dyktige ansatte som gjerne vil hjelpe deg.'
                : 'Here at Medisinsk Senter Fornebu we are a bunch of skilled employees who would love to help you.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex md:flex-row flex-col mb-4">
              <div className="flex flex-col mr-2">
                <span className="border-b border-white pb-1 w-28">
                  {language === 'no' ? 'Åpningstider:' : 'Opening hours:'}
                </span>
              </div>
              <div className="flex md:flex-row flex-col mt-4 md:mt-0">
                <p>{contactInfo.openingHours}</p>
                <p>
                  {language === 'no'
                    ? 'Kveldstimer etter avtale'
                    : 'Evening hours by appointment'}
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col mb-4">
              <div className="flex flex-col mr-2">
                <span className="border-b border-white pb-1 w-28">
                  {language === 'no' ? 'Telefon:' : 'Phone:'}
                </span>
              </div>
              <div className="flex flex-col mt-4 md:mt-0">
                <p>{contactInfo.phone}</p>
                <p>Mandag - Fredag 08:45 - 11:00 og 12:00 - 15:00</p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col mb-4">
              <div className="flex flex-col mr-2">
                <span className="border-b border-white pb-1 w-28">
                  {language === 'no' ? 'Adresse:' : 'Address:'}
                </span>
              </div>
              <div className="flex flex-col mt-4 md:mt-0">
                <p>{contactInfo.address}</p>
                <p>Vi holder til inne på kjøpesenteret Fornebu S, bygg C.</p>
              </div>
            </div>
            <Button
              variant={'outline'}
              onClick={() => handleButtonClick(onEmployeesClick)}
              className="bg-primary text-base text-black hover:bg-primary-600 bg-white mt-4 p-4"
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
