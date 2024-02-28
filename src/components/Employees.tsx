import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { useLanguage } from '~/context/LanguageContext'
import { AllEmployeeQuery } from '~/gql/graphql'

import GeneralDialog from './GeneralDialog'

export default function Employees({ employees }) {
  type Employee = AllEmployeeQuery['allEmployee'][number]

  const [hovered, setHovered] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  )
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
  const { language } = useLanguage()

  const handleCardClick = (employee) => {
    if (isSmallScreen) {
      setSelectedEmployee(employee)
      setDialogOpen(true)
    }
  }

  useEffect(() => {
    if (isSmallScreen) {
      setHovered(null)
    }
  }, [isSmallScreen])

  return (
    <div className="flex flex-col justify-center min-h-screen bg-secondary">
      <div
        className="lg:text-3xl md:text-3xl text-2xl mt-16 text-primary lg:px-44 md:px-20 px-6 text-left self-start"
        style={{ fontWeight: 400 }}
      >
        {language === 'no'
          ? 'Bli kjent med våre ansatte'
          : 'Meet our employees'}
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:mt-24 mt-12 md:mb-32 mb-16">
          {employees.map((employee) => (
            <div
              key={employee.name}
              onMouseEnter={() => !isSmallScreen && setHovered(employee)}
              onMouseLeave={() => !isSmallScreen && setHovered(null)}
              onClick={() => handleCardClick(employee)}
              className="cursor-pointer"
            >
              <div
                className="text-left lg:px-0 px-6 mb-2 text-primary text-2xl"
                style={{ fontWeight: 400 }}
              >
                {employee.name}
              </div>
              <div className="lg:p-0 px-4 py-10">
                <Card
                  className={`lg:w-[484px] lg:h-[300px] relative overflow-hidden ${
                    hovered === employee ? 'show-overlay' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    <Image
                      src={employee.image?.asset.url}
                      width={484}
                      height={300}
                      alt={employee.name}
                      className={`w-[484px] h-[300px] object-cover transition-all duration-300 ease-in-out ${
                        hovered === employee ? 'hovered-image-class' : ''
                      }`}
                    />
                    {hovered === employee && (
                      <div className="absolute inset-0 bg-primary bg-opacity-70 flex flex-col justify-between p-6">
                        <CardDescription className="text-white text-base">
                          <PortableText value={employee.descriptionRaw} />
                        </CardDescription>
                        <Button
                          variant={'outline'}
                          onClick={undefined}
                          className={`bg-white text-base text-primary ${
                            language === 'no' ? 'w-28' : 'w-36'
                          }`}
                          size={'lg'}
                        >
                          {language === 'no'
                            ? 'Bytt fastlege'
                            : 'Change your GP'}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEmployee && (
        <GeneralDialog
          isOpen={dialogOpen}
          onDismiss={() => setDialogOpen(false)}
          dialogTitle={selectedEmployee.name}
          dialogDescription={
            <PortableText value={selectedEmployee.descriptionRaw} />
          }
          buttonText={
            language === 'no'
              ? 'Bytt fastlege'
              : 'Change your general practitioner'
          }
          href="#"
        />
      )}
    </div>
  )
}
