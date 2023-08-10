// components/Navigation.jsx
'use client'; // Agrega la directiva 'use client' al principio del archivo

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Utiliza next/navigation en lugar de next/router
import style from './Navigation.module.css';

const Links = [
  { label: "Inicio", route: "/" },
  { label: "Portafolio", route: "/portafolio" },
  { label: "Contacto", route: "/contacto" },
];

export function Navigation() {
  const router = usePathname();

  return (
    <header className={style.header}>
      <nav className='container'>
        <ul className={style.navigation}>
          {Links.map(({ label, route }) => (
            <li key={route} className={router === route ? style.active : ''}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
