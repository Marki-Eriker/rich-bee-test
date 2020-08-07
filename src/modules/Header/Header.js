import React, { useState } from 'react'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='header container'>
      <div className='header__logo'><a href='#'>Relationz</a></div>

      <nav className='header__nav'>
        <ul className='header__menu'>
          <li className='header__menu-item'><a href="#">Услуги</a></li>
          <li className='header__menu-item'><a href="#">Возможности</a></li>
          <li className='header__menu-item'><a href="#">Цены</a></li>
          <li className='header__menu-item'><a href="#">Авторизация</a></li>
          <li
            className='header__menu-item header__menu-item--toggle'
            onClick={() => setIsOpen(!isOpen)}
          >
            <a href="#">Меню</a>
          </li>
        </ul>

        {
          isOpen && (
            <ul className='header__menu header__menu-mobile'>
              <li className='header__menu-item header__menu-item-mobile'><a href="#">Услуги</a></li>
              <li className='header__menu-item header__menu-item-mobile'><a href="#">Возможности</a></li>
              <li className='header__menu-item header__menu-item-mobile'><a href="#">Цены</a></li>
              <li className='header__menu-item header__menu-item-mobile'><a href="#">Авторизация</a></li>
              <span className='header__menu-close' onClick={() => setIsOpen(false)}/>
            </ul>
          )
        }
      </nav>
      <a href="#" className='header__button button button--blue-outline'>Регистрация</a>
    </header>
  )
}

export default Header