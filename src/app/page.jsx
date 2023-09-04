'use client'
import BackgroundVideo from './componets/home/BackgroundVideo';
import { Languages } from './componets/home/languages';
import { Development } from './componets/home/development';
import styles from './page.module.css';

import { useState, useEffect } from 'react';
import { Description } from './componets/home/description';
import { Proyects } from './componets/home/Projects';
import ContactUs from './componets/home/ContactUs';


export default function Home() {
  const paragraphs = [
    "Bienvenido a Box Code   ",
    "desarrollamos Software   ",
    "Front-End y Back-End   "
  ];

  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const typeText = () => {
      if (currentText === paragraphs[currentParagraph]) {
        // Cuando el texto actual coincide con el párrafo actual, avanzamos al siguiente párrafo
        setCurrentParagraph((prevParagraph) => (prevParagraph + 1) % paragraphs.length);
        setCurrentText('');
        return;
      }

      const nextChar = paragraphs[currentParagraph][currentText.length];
      setCurrentText((prevText) => prevText + nextChar);

    };


    const timer = setTimeout(typeText, 200);

    return () => clearTimeout(timer);
  }, [currentText, currentParagraph]);

  return (
    <>
      <div id='BoxCode' className={`container ${styles['border-container']}`}>
        <div className={styles['hVideo']}>
          <BackgroundVideo />
          <div className={styles['bgIndex']}>

            <button data-text="Awesome" className={styles.button}>
              <span className={styles['actual-text']}>
                &nbsp;&nbsp;Constructores&nbsp;<br />&nbsp;&nbsp;de&nbsp;experiencias&nbsp;
              </span>
              < br />
              <span className={styles['hover-text']}>
                &nbsp;&nbsp;Constructores&nbsp;<br />&nbsp;&nbsp;de&nbsp;experiencias&nbsp;
              </span>
            </button>

            <div className={`mt-5`}>
              <p className={`${styles['textTyping']}`}>{currentText}</p>
            </div>

          </div>
        </div>
      </div >

      <Languages />

      <Development />

      <Description />

      <Proyects />

      <ContactUs />
      
    </>
  );
}
