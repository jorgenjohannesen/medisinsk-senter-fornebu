import React, { useState, useEffect, useRef } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

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
export default function NotificationSlideshow() {
  const [notifications, setNotifications] = useState([...initialNotifications])
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)
  const visibleSlides = 3

  useEffect(() => {
    const slideWidth = 100 / visibleSlides
    const updateSlide = () => {
      setCurrentSlide((prevSlide) => {
        let newSlide = prevSlide + 0.4
        const maxSlide = slideWidth * notifications.length

        if (newSlide > maxSlide - 100) {
          setNotifications((notifs) => [...notifs, ...initialNotifications])
        }

        return newSlide
      })
    }

    const slideInterval = setInterval(updateSlide, 50)
    return () => clearInterval(slideInterval)
  }, [notifications])

  return (
    <div className="w-full overflow-hidden" ref={slideRef}>
      <div
        className="flex transition-transform duration-500 ease-linear"
        style={{ transform: `translateX(-${currentSlide}%)` }}
      >
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex-none"
            style={{ width: `${100 / visibleSlides}%` }}
          >
            <Card className="bg-white bg-opacity-50 rounded-lg mx-2 my-4">
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
