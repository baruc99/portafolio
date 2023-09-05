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
          {/* <img className={` ${style['item-logo']} `} src={'/isotipo.png'} alt="logo codebox" /> */}
          <Image
            src="/isotipo.png"
            alt="logo codebox"
            width={40}
            height={40}
            className={style['item-logo']}
          />
          {/* </Link> */}
        </div>




        <ul className={style.navigation}>
          {Links.map(({ label, route }, index) => (
            // <li key={route} className={router === route ? style.active : ''}>
            <li key={route} className={index === 2 ? style.active : ''}>
              <Link href={`#${label}`}>{label}</Link>
              {/* <Link href={route}>{label}</Link> */}
            </li>
          ))}
          <li className={style['nav-item-instagram']}>
            <Link href={'https://www.instagram.com/boxcode00/'} target='_blank'>
              <span className={style['ig-text']}>@boxcode00</span>
              {/* <img className={`${style['ig-logo']}`} src={'/ig.png'} alt="instagram" /> */}
              <Image
                src="/ig.png" // Ruta relativa a la carpeta 'public'
                alt="instagram"
                width={40} // Ancho en píxeles (ajusta según tus necesidades)
                height={30} // Altura en píxeles (ajusta según tus necesidades)
                className={style['ig-logo']} // Clase CSS para estilizar la imagen
              />
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}
