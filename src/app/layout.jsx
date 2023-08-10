import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Ubuntu } from 'next/font/google'

import { Navigation } from './componets/Navigation';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'bygomsa',
  description: 'mi portafolio de proyectos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={ubuntu.className}>

        <Navigation />

        {children}


      </body>
    </html>
  )
}
