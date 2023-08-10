'use client'
import BackgroundVideo from './componets/home/BackgroundVideo';
import { Languages } from './componets/home/languages';
import styles from './page.module.css';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import { useState, useEffect } from 'react';


export default function Home() {
  const paragraphs = [
    "Mi nombre es Baruc Sánchez",
    "soy desarrollador de Software",
    "me especializo en aplicaciones Web, Landing Page, sitios Web, etc"
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

    const timer = setTimeout(typeText, 200); // Cambia este valor para ajustar la velocidad de tipiado

    return () => clearTimeout(timer);
  }, [currentText, currentParagraph]);

  return (
    <>
      <div className={styles['hVideo']}>
        <BackgroundVideo />
        <div className={styles['bgIndex']}>
          <div className={`${styles['custom-text']}  ${styles['rotation-highlight']}`}>Hola,</div>
          <div className={`mt-5`}>
            <p className={`${styles['textTyping']}`}>{currentText}</p>
          </div>
        </div>
      </div>
      <Languages />
    </>
  );
}
