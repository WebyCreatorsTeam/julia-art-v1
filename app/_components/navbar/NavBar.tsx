import Link from 'next/link'
import React from 'react'

const navLinks: Array<{ title: string, href: string }> = [
  { title: 'Категории', href: '/' },
  { title: 'Товары', href: '/products' },
  { title: 'Новости', href: '/news' },
  { title: 'Админы', href: '/admins' },
  { title: 'Сообщиения', href: '/messages' },
]

const NavBar = () => {
  return (
    <nav>
      <div>
        {navLinks.map((link, index) => (
          <Link key={index} href={`/dashboard/${link.href}`}>{link.title}</Link>
        ))}
      </div>
      <div className="nav__user">
        <div>Привет, Люляха</div>
        <button>Выход</button>
      </div>
    </nav>
  )
}

export default NavBar