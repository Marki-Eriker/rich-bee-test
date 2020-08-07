import React from 'react'
import Slider from "react-slick"

const Reviews = () => {

  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Что о нас говорят пользователи</h2>
      <Slider {...settings} className='reviews__slider' draggable>
        <div className='reviews__card card'>
          <img src='/img/users/user-4.png' alt='user' className='reviews__user'/>
          <h4 className='reviews__user-name'>Michelle Johnson, Australia</h4>
          <span className='reviews__quotes'/>
          <p className='reviews__text'>
            The multichannel sales engagement platform which automates personal email
            outreach, calls, and tasks, while Sales can focus on what really matters
            - closing while Sales can focus on what really matters - closing
          </p>
          <img src='/img/sign.png' alt='sign' className='reviews__sign'/>
        </div>

        <div className='reviews__card card'>
          <img src='/img/users/user-4.png' alt='user' className='reviews__user'/>
          <h4 className='reviews__user-name'>Michelle Johnson, Australia</h4>
          <span className='reviews__quotes'/>
          <p className='reviews__text'>
            The multichannel sales engagement platform which automates personal email
            outreach, calls, and tasks, while Sales can focus on what really matters
            - closing while Sales can focus on what really matters - closing
          </p>
          <img src='/img/sign.png' alt='sign' className='reviews__sign'/>
        </div>

        <div className='reviews__card card'>
          <img src='/img/users/user-4.png' alt='user' className='reviews__user'/>
          <h4 className='reviews__user-name'>Michelle Johnson, Australia</h4>
          <span className='reviews__quotes'/>
          <p className='reviews__text'>
            The multichannel sales engagement platform which automates personal email
            outreach, calls, and tasks, while Sales can focus on what really matters
            - closing while Sales can focus on what really matters - closing
          </p>
          <img src='/img/sign.png' alt='sign' className='reviews__sign'/>
        </div>
      </Slider>
    </section>
  )
}

export default Reviews