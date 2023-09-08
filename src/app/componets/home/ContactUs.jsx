import Link from 'next/link'
import styles from './ContactUs.module.css'
import Image from 'next/image';

import { useEffect, useState } from 'react';
import CustomModal from '../form/form';


function ContactUs() {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
        const btn = document.querySelector("#btnCharlamos");
        if (btn) {
            btn.style.zIndex = "1";
        }
    }

    const openModal = () => {
        setIsModalOpen(true);
        const btn = document.querySelector("#btnCharlamos");
        if (btn) {
            btn.style.zIndex = "-1";
        }
    };

    const handleClick = () => {
        const rocket = document.querySelector('svg');

        if (rocket) {
            rocket.classList.add('fly');

            setTimeout(() => {
                rocket.classList.remove('fly');
                openModal();
            }, 500);
        }
    };

    useEffect(() => {
        const btn = document.querySelector("#btnCharlamos");
        if (btn) {
            btn.addEventListener("click", handleClick);
        }

        return () => {
            if (btn) {
                btn.removeEventListener("click", handleClick);
            }
        };
    }, []);


    return (
        <>
            <div className='mb-5'>
                <div id='Contactanos' className={`container ${styles['border-container']} ${styles['height-contacUs']}`}>
                    <div className={`row pb-5`} style={{ height: '100%' }}>
                        <div className={`col-md-1`}></div>

                        <div className={`col-md-10 ${styles['contexts']}`}>
                            <div className={`${styles['box']} ${styles['title-container']}`}>
                                <div className={`${styles['title']}`}>
                                    <h2>Inicia tú proyecto</h2>
                                    <div className={`${styles['line']} `}></div>
                                </div>
                            </div>
                            <div className={`${styles['box']} centrar ${styles['aling-contact']}`}>
                                <h2>Cuentanos tú proyecto</h2>
                                <p>
                                    Ponte en contacto con nosotros
                                    para poder crecer juntos.
                                </p>
                                <button
                                    id="btnCharlamos"
                                    className={` ${styles['Btn']} borde-purple ${styles['c-button']} ${styles['c-button--gooey']}`}
                                    onClick={handleClick}
                                >
                                    Charlamos
                                    <svg className={`${styles['svg']}`} viewBox="0 0 22.97 45.35">
                                        <g id="Capa_2-2" data-name="Capa 2">
                                            <g>
                                                <path className={` ${styles['cls-1']} `} d="m8.86,11.95c1.46-1.47,3.8-1.47,5.27,0,1.47,1.46,1.48,3.82.04,5.28-1.46,1.47-3.85,1.48-5.31,0-1.46-1.46-1.45-3.81.01-5.28Zm1.04,1.02c-.9.9-.92,2.33-.03,3.22.89.9,2.34.91,3.23.03.9-.89.91-2.33.02-3.23-.9-.91-2.32-.92-3.22-.03Z" />
                                                <path className={` ${styles['cls-1']} `} d="m12.04,37.98c.07.29.18.51.18.72.01,1.94.01,3.87,0,5.81,0,.53-.3.85-.74.84-.42,0-.71-.33-.71-.83,0-1.94,0-3.87,0-5.81,0-.36.11-.69.48-.78.24-.06.51.03.8.05Z" />
                                                <path className={` ${styles['cls-1']} `} d="m15.46,35.98c.07.32.16.53.17.75.01,1.62,0,3.24,0,4.86,0,.54-.29.85-.74.84-.42,0-.71-.33-.71-.83,0-1.64,0-3.27,0-4.91,0-.34.1-.67.46-.75.25-.06.53.02.83.03Z" />
                                                <path className={` ${styles['cls-1']} `} d="m8.7,41.85c-.48.47-1.12.33-1.28-.18-.05-.14-.05-.3-.05-.45,0-1.48,0-2.96,0-4.45,0-.59.25-.91.71-.92.48-.01.75.32.75.93,0,1.48,0,2.96,0,4.45,0,.24-.09.49-.11.61Z" />
                                                <path className={` ${styles['cls-1']} `} d="m22.95,28.39c0-.22-.05-.41-.13-.55-.08-1.08-.18-2.16-.35-3.23-.26-1.67-1.29-2.91-2.64-3.87-.31-.22-.41-.44-.41-.82.01-.85-.03-1.69-.11-2.52,0-.05,0-.1,0-.15,0-.11-.02-.21-.03-.32-.04-.29-.08-.57-.13-.86-.26-1.79-.69-3.55-1.22-5.3-.9-2.96-2.02-5.83-3.76-8.41,0,0,0,0,0,0-.45-.68-.95-1.3-1.58-1.84-.74-.64-1.4-.71-2.11-.06-.62.56-1.21,1.2-1.68,1.89-1.75,2.58-2.87,5.46-3.78,8.42-.91,2.98-1.54,6.02-1.5,9.16,0,.38-.11.6-.41.82-1.35.97-2.38,2.2-2.64,3.88-.17,1.09-.28,2.18-.35,3.28-.06.13-.09.29-.1.49-.07,2.14-.02,4.27.68,6.33.2.59.5.83.9.71.18-.04.39-.16.61-.36.94-.81,1.89-1.61,2.84-2.41.39-.33.79-.65,1.17-.96.36.49.71.95,1.04,1.42.18.25.4.38.67.42.09.02.19.03.3.02.82-.02,1.65,0,2.57,0-.03.36-.09.69-.09,1.03,0,.41.2.69.5.78.08.03.17.05.26.05.43,0,.72-.31.73-.81,0-.34-.05-.68-.09-1.05.12,0,.23,0,.35,0,.84,0,1.58,0,2.31.02.38,0,.67-.12.89-.43.33-.47.68-.94,1.05-1.43.37.31.76.62,1.15.95.95.8,1.9,1.59,2.84,2.4.11.09.21.16.3.22.57.38.99.2,1.24-.55.7-2.06.76-4.19.69-6.34Zm-3.17-5.82c.75.73,1.19,1.63,1.37,2.65.36,2.05.38,4.12.25,6.19-.04.66-.18,1.31-.29,2.04-1.2-1.01-2.29-1.94-3.4-2.85-.24-.2-.25-.37-.15-.65.13-.36.25-.71.38-1.07.1-.28.2-.57.29-.85.15-.46.3-.93.45-1.39.04-.13.05-.25.04-.36.32-1.32.53-2.68.63-4.08.19.16.32.26.44.37Zm-5.55,9.55s-.09,0-.14,0c-.5-.03-.99,0-1.52.02-.12,0-.24,0-.35,0,0-2.93,0-5.78.01-8.63,0-.75-.2-1.08-.68-1.1,0,0,0,0,0,0,0,0-.02,0-.02,0-.01,0-.03,0-.04,0,0,0-.02,0-.02,0,0,0,0,0-.02,0,0,0-.02,0-.03,0-.47.03-.67.36-.67,1.1,0,2.85,0,5.69,0,8.62-.33,0-.65,0-.98,0-.21,0-.41,0-.61,0-.21,0-.42-.01-.64-.02-.22-.06-.38-.2-.5-.43-.4-.7-.84-1.37-1.17-2.1-1.43-3.22-1.92-6.63-1.86-10.12.01-.71.05-1.41.12-2.1.28-1.5.5-3.01.85-4.48.58-2.42,1.47-4.74,2.58-6.97.08-.17.3-.34.49-.37,1.65-.3,3.31-.31,4.97,0,.06.01.13.04.2.07.11.07.22.18.27.28.13.27.26.55.39.82.66,1.46,1.24,2.95,1.71,4.45.17.56.33,1.13.46,1.7.34,1.41.55,2.85.81,4.28.08.76.13,1.54.14,2.32.05,3.48-.44,6.89-1.87,10.11-.32.73-.77,1.4-1.17,2.1-.16.28-.37.44-.7.46,0,0,0,0-.01,0ZM11.14,1.77c.08-.09.3-.17.45-.17.05.01.11.03.15.06.05.04.1.08.15.12.46.55.88,1.13,1.31,1.7.06.1.12.2.17.29-.02,0-.04,0-.05,0-1.29,0-2.5-.01-3.7-.02,0,0,.01-.02.02-.03.49-.65.98-1.32,1.5-1.95ZM3.18,22.57c.12-.11.25-.21.44-.37.11,1.42.32,2.8.64,4.14,0,.09.01.19.04.29.06.2.13.4.19.6.23.8.49,1.59.8,2.37.04.11.08.22.12.33.1.29.09.45-.15.65-1.11.92-2.21,1.85-3.42,2.87-.11-.73-.24-1.38-.29-2.04-.14-2.07-.11-4.15.25-6.2.18-1.02.62-1.93,1.37-2.66Z" />
                                                <path className={` ${styles['cls-1']} `} d="m14.03,11.96c-1.46-1.46-3.79-1.47-5.26,0-1.47,1.46-1.49,3.81-.04,5.27,1.46,1.47,3.84,1.47,5.31,0,1.46-1.46,1.45-3.81,0-5.27Zm-1.04,1.02c.9.89.92,2.32.03,3.22-.89.9-2.33.91-3.23.03-.9-.89-.91-2.32-.02-3.22.9-.91,2.31-.92,3.22-.03Z" />
                                                <path className={` ${styles['cls-1']} `} d="m10.82,37.96c-.08.29-.18.51-.18.72-.01,1.94-.02,3.87-.01,5.81,0,.52.3.85.74.84.42,0,.71-.33.71-.83,0-1.94,0-3.87.01-5.81,0-.36-.11-.69-.48-.78-.24-.06-.51.03-.79.05Z" />
                                                <path className={` ${styles['cls-1']} `} d="m7.41,35.96c-.07.32-.17.53-.17.75-.01,1.62-.01,3.24,0,4.86,0,.54.29.85.74.84.42,0,.71-.33.71-.83,0-1.63,0-3.27,0-4.9,0-.34-.1-.67-.46-.75-.25-.06-.53.02-.83.04Z" />
                                                <path className={` ${styles['cls-1']} `} d="m14.15,41.83c.48.47,1.12.32,1.28-.18.05-.14.05-.3.05-.45,0-1.48,0-2.96,0-4.44,0-.59-.25-.91-.71-.92-.48-.01-.75.32-.75.93,0,1.48,0,2.96,0,4.44,0,.24.09.49.11.61Z" />
                                            </g>
                                        </g>
                                    </svg>
                                    <div className={`${styles['c-button__blobs']}`}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>

                                </button>

                                {isModalOpen && <CustomModal isOpen={isModalOpen} closeModal={closeModal} />}

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                            <feColorMatrix
                                                in="blur"
                                                mode="matrix"
                                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                                result="goo"
                                            ></feColorMatrix>
                                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>

                                <p>
                                    contact@boxcode.dev
                                </p>
                            </div>
                            <div className={`${styles['box']} ${styles['centrar-logo']}`}>
                                <div>
                                    {/* <img className={` ${styles['logo']} `} src={'/isotipo.png'} alt="Logo" /> */}
                                    <Image
                                        src="/isotipo.png" // Ruta relativa a la carpeta 'public'
                                        alt="Logo"
                                        width={192} // Ancho en píxeles (ajusta según tus necesidades)
                                        height={192} // Altura en píxeles (ajusta según tus necesidades)
                                        className={styles['logo']} // Clase CSS para estilizar la imagen
                                    />
                                </div>
                                <div>
                                    <Link href={'https://www.instagram.com/boxcode00/'} target='_blank'>
                                        {/* <img className={`${styles['ig-logo']}`} src={'/ig.png'} alt="instagram" /> */}
                                        <Image
                                            src="/ig.png" // Ruta relativa a la carpeta 'public'
                                            alt="instagram"
                                            width={63} // Ancho en píxeles (ajusta según tus necesidades)
                                            height={62} // Altura en píxeles (ajusta según tus necesidades)
                                            className={styles['ig-logo']} // Clase CSS para estilizar la imagen
                                        />

                                        <span className={styles['ig-text']}>@boxcode00</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={`col-md-1`}></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactUs