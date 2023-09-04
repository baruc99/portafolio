// components/Navigation.jsx
'use client'; // Agrega la directiva 'use client' al principio del archivo

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Utiliza next/navigation en lugar de next/router
import style from './Navigation.module.css';
import Image from 'next/image';

const Links = [
  { label: "BoxCode", route: "/" },
  { label: "Proyectos", route: "/portafolio" },
  { label: "Contactanos", route: "/contacto" },
];

export function Navigation() {
  const router = usePathname();

  return (
    <header className={style.header}>
      <nav className={`container ${style['border-container']} mt-5 ${style['flex-container']}`}>

        <div className={` ${style['div-logo']} `}>
          {/* <Link href={Links[0].route}> */}
          <img className={` ${style['item-logo']} `} src={'/isotipo.png'} alt="logo codebox" />
          {/* </Link> */}
        </div>




        <ul className={style.navigation}>
          {Links.map(({ label, route },index) => (
            // <li key={route} className={router === route ? style.active : ''}>
            <li key={route} className={index  === 2 ? style.active : ''}>
              <Link href={`#${label}`}>{label}</Link>
              {/* <Link href={route}>{label}</Link> */}
            </li>
          ))}
          <li className={style['nav-item-instagram']}>
            <Link href={'https://www.instagram.com/boxcode00/'} target='_blank'>
              <span className={style['ig-text']}>@boxcode00</span>
              <img className={`${style['ig-logo']}`} src={'/ig.png'} alt="instagram" />
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}
