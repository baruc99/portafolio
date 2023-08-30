import 'bootstrap/dist/css/bootstrap.min.css';
import { font } from './fonts/exo2.jsx';

import './globals.css';


import { Navigation } from './componets/Navigation';



export const metadata = {
  title: 'bygomsa',
  description: 'mi portafolio de proyectos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={ font.className } >

        <Navigation className={ font.variable } />

        {children}


      </body>
    </html>
  )
}
