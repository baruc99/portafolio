// components/Navigation.jsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import style from './Navigation.module.css';
import Image from 'next/image';


const Links = [
  // { label: "BoxCode", route: "/" },
  { label: "Proyectos", route: "/portafolio" },
  { label: "Contactanos", route: "/contacto" },
];

export function Navigation() {
  // const router = usePathname();

  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   // Agrega un event listener al componente de ventana para detectar el scroll
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Limpia el event listener cuando el componente se desmonta
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <header className={` ${style.header} `}>
      {/* <div className={` ${isScrolled ? style.scrolled : ''} `}> */}
      <div className={` `}>
        <nav className={`container mt-5 ${style['border-container']} ${style['flex-container']}`}>

          <div className={` ${style['div-logo']} `}>

            <Image
              src="/isotipo.png"
              alt="logo codebox"
              width={40}
              height={40}
              className={style['item-logo']}
            />

          </div>

          <ul className={style.navigation}>
            {Links.map(({ label, route }, index) => (

              <li key={route} className={index === 1 ? style.active : ''}>
                <Link href={`#${label}`}>{label}</Link>

              </li>
            ))}
            <li className={style['nav-item-instagram']}>
              <Link href={'https://www.instagram.com/boxcode00/'} target='_blank'>
                {/* <span className={style['ig-text']}>@boxcode00</span> */}

                <Image
                  src="/ig.png"
                  alt="instagram"
                  width={40}
                  height={30}
                  className={style['ig-logo']}
                />
              </Link>
            </li>
          </ul>

        </nav>
      </div>

    </header>
  );
}
