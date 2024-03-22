import React from 'react'
import "./testimonials.css"
import Image1 from "../../assets/avatar-1.svg"
import Image3 from "../../assets/avatar-3.svg"

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Image1,
    title: "Career Coach",
    subtitle: "TechPro Education",
    comment:
      "Working with him was so fun and inspiring. I find his work successful. 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "CodeRunners Lead",
    subtitle: "Team Lead",
    comment:
      "He is very compatible within the team and does a very good job. He takes care of his share in a very short time. He's a great employee. 👍",
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials container section" id='testimonials'>
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper className="testimonials__container grid"
      modules={[ Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      
      >
        {data.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials