import { PortableText } from '@portabletext/react'
import React, { useEffect, useRef, useState } from 'react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotificationSlideshow({
  notifications,
  onImportantInfoClick,
  onHomeClick,
}) {
  const slideRef = useRef(null)
  const totalNotifications = notifications.length
  const timePerSlide = 3 // Each slide is visible for 3 seconds
  const totalDuration = totalNotifications * timePerSlide * 2 // Duration for all slides to show twice
  const [activeButton, setActiveButton] = useState('home')

  const handleButtonClick = (buttonName: string, onClickFunction: any) => {
    setActiveButton(buttonName)
    if (buttonName !== 'important') {
      onHomeClick()
    }
    if (onClickFunction) {
      onClickFunction(true)
    }
  }

  return (
    <div className="w-full overflow-hidden rounded-lg" ref={slideRef}>
      <div
        className="flex"
        style={{
          animation: `slide ${totalDuration}s linear infinite`,
          width: `${totalNotifications * 100}%`, // Adjust width based on number of slides
        }}
      >
        {notifications.concat(notifications).map((notification, index) => (
          <div
            key={index}
            className="flex-none"
            style={{ width: `${100 / (2 * totalNotifications)}%` }} // Adjust each slide's width
          >
            <Card
              onClick={() =>
                handleButtonClick('important', onImportantInfoClick)
              }
              className="bg-white bg-opacity-50 rounded-lg mx-2 h-[132px] cursor-pointer"
            >
              <CardHeader className="flex flex-row justify-between items-center p-2 mt-2 ml-2">
                <CardTitle className="text-md text-2xl">
                  {notification.title}
                </CardTitle>
                <img className="h-6 mr-4" src={'/bell-red.svg'} alt={'bell'} />
              </CardHeader>
              <div className="p-4 text-lg prose">
                <PortableText value={notification.previewRaw} />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
