import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'

export default function Employees({ employees }) {
  const [hovered, setHovered] = useState(null)
  const { language } = useLanguage()

  return (
    <div className="flex flex-col justify-center min-h-screen bg-secondary">
      <div
        className="text-3xl mt-16 text-primary px-44 text-left self-start"
        style={{ fontWeight: 400 }}
      >
        {language === 'no'
          ? 'Bli kjent med våre ansatte'
          : 'Meet our employees'}
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-24 mb-32">
          {employees.map((employee, index: any) => (
            <div
              key={employee.name}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="text-left mb-2 text-primary text-2xl"
                style={{ fontWeight: 400 }}
              >
                {employee.name}
              </div>
              <Card
                className={`w-[484px] h-[300px] relative overflow-hidden ${
                  hovered === index ? 'show-overlay' : ''
                }`}
              >
                <CardContent className="p-0">
                  <Image
                    src={employee.image?.asset.url}
                    width={484}
                    height={300}
                    alt={employee.name}
                    className={`object-cover transition-all duration-300 ease-in-out ${
                      hovered === index ? 'hovered-image-class' : ''
                    }`}
                  />
                  {hovered === index && (
                    <div className="absolute inset-0 bg-primary bg-opacity-70 flex flex-col justify-between p-6">
                      <CardDescription className="text-white text-base prose">
                        <PortableText value={employee.descriptionRaw} />
                      </CardDescription>
                      <Button
                        variant={'outline'}
                        onClick={undefined}
                        className="bg-white text-base text-primary w-28"
                        size={'lg'}
                      >
                        {language === 'no'
                          ? 'Bytt fastlege'
                          : 'Change your general practioner'}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
