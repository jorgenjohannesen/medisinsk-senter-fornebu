import { PortableText } from '@portabletext/react'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotificationSlideshow({
  notifications,
  onImportantInfoClick,
  onHomeClick,
}) {
  const [divisor, setDivisor] = useState(2)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const updateScreenSize = () => {
      const screenWidth = window.innerWidth
      setDivisor(screenWidth >= 768 ? 2 : 1)
      setIsSmallScreen(screenWidth < 768)
    }
    updateScreenSize()

    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  const settings = {
    dots: !isSmallScreen,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2300,
    slidesToShow: divisor,
    slidesToScroll: 1,
    swipe: isSmallScreen,
    draggable: isSmallScreen,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipe: true,
          draggable: true,
          centerMode: true, // Enable center mode
          centerPadding: '20px', // Adjust this value based on your design
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          swipe: false,
          draggable: false,
        },
      },
    ],
  }

  const handleButtonClick = (buttonName: string, onClickFunction: any) => {
    if (buttonName !== 'important') {
      onHomeClick()
    }
    if (onClickFunction) {
      onClickFunction(true)
    }
  }

  return (
    <div className="w-full rounded-lg md:mb-20">
      <Slider {...settings}>
        {notifications.map((notification, index) => (
          <div key={index} className="pb-4">
            <Card
              onClick={() =>
                handleButtonClick('important', onImportantInfoClick)
              }
              className="bg-white bg-opacity-50 rounded-lg mx-2 h-[132px] cursor-pointer"
            >
              <CardHeader className="flex flex-row justify-between items-center p-2 mt-2 ml-2">
                <CardTitle className="text-lg md:text-2xl">
                  {notification.title}
                </CardTitle>
                <img className="h-6 mr-4" src={'/bell-red.svg'} alt={'bell'} />
              </CardHeader>
              <div className="p-4 text-md lg:text-lg prose max-h-[70px] overflow-hidden">
                <PortableText value={notification.previewRaw} />
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  )
}
