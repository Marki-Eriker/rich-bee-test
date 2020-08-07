import React from 'react'

const GetApp = () => {
  return (
    <section className='get-app'>
      <div className='container'>
        <div className='get-app__description'>
          <h1 className='get-app__title'>Отношения на новом уровне</h1>
          <p className='get-app__text'>
            The multichannel sales engagement platform which automates personal email outreach,
            calls, and tasks, while Sales can focus on what really matters - closing deals.
          </p>
          <form className='get-app__form'>
            <input type='text' placeholder='Email id'/>
            <a href="#" className='get-app__button button button--blue'>Try it for free</a>
          </form>
          <ul className='get-app__features'>
            <li className='get-app__features-item'>Synced contacts</li>
            <li className='get-app__features-item'>Regular reminders</li>
            <li className='get-app__features-item'>The multichannel </li>
          </ul>
        </div>
        <div className='get-app__example'>
          <img src='/img/app.png' alt='app example'/>
        </div>
      </div>
    </section>
  )
}

export default GetApp