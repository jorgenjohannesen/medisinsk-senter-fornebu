import React, { useEffect, useRef, useState } from 'react'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const initialNotifications = [
  {
    title: '1 Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
  {
    title: '2 Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
  {
    title: '3 Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
  {
    title: '4 Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
  {
    title: '4 Se åpningstider i julen',
    description:
      'Klikk her for å se åpningstider i perioden 22.desember - 29. desember.',
  },
]

export default function NotificationSlideshow() {
  const slideRef = useRef(null)
  const totalNotifications = initialNotifications.length
  const visibleSlides = 3 // Number of slides visible at a time
  const duplicatedNotifications = [
    ...initialNotifications,
    ...initialNotifications,
  ]
  const totalSlides = duplicatedNotifications.length // Total slides including duplicates
  const slideShowDuration = totalSlides * 3 // 3 seconds per slide

  return (
    <div className="w-full overflow-hidden rounded-lg" ref={slideRef}>
      <div
        className="flex"
        style={{
          animation: `slide ${slideShowDuration}s linear infinite`,
          transform: `translateX(-${100 / visibleSlides}%)`,
        }}
      >
        {duplicatedNotifications.map((notification, index) => (
          <div
            key={index}
            className="flex-none"
            style={{ width: `${100 / visibleSlides}%` }}
          >
            <Card className="bg-white bg-opacity-50 rounded-lg mx-2">
              <CardHeader className="flex flex-row items-center p-2 mt-2 ml-2">
                <CardTitle className="text-md text-xl">
                  {notification.title}
                </CardTitle>
                <img className="h-6 ml-28" src={'/bell-red.svg'} alt={'bell'} />
              </CardHeader>
              <div className="p-4">
                <p>{notification.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
