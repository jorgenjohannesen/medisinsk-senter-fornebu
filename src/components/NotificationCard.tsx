import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const notifications = [
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
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
  }

  return (
    <Slider {...settings} className="w-full px-40">
      {notifications.map((notification, index) => (
        <div key={index}>
          <Card className="bg-white bg-opacity-50 rounded-lg mx-2 my-4">
            {' '}
            <CardHeader className="flex flex-row items-center p-2 mt-2 ml-2">
              {' '}
              <CardTitle className="text-md text-xl">
                {notification.title}
              </CardTitle>
              <img className="h-6 ml-28" src={'/bell-red.svg'} alt={'bell'} />{' '}
            </CardHeader>
            <div className="p-4">
              <p>{notification.description}</p>
            </div>
          </Card>
        </div>
      ))}
    </Slider>
  )
}
