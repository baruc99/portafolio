'use client'
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styles from './Projects.module.css';
import Image from 'next/image';


const handleDragStart = (e) => e.preventDefault();

const onInitialized = (e) => {
    console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
    console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
    console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
    console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};

const itemsLength = Array.from({ length: 5 });

const urls = [
    'http://wtc.veracruz.gob.mx/',
    'https://unpca.org.mx/',
    'http://www.veracruz.gob.mx/cuartoinformedegobierno/',
    'https://twitter.com/',
    'https://www.google.com/',
]

const items = itemsLength.map((item, index) => {
    return (
        <div key={index} className="item" data-value={index + 1}>
            <a href={urls[index]} target="_blank" rel="noopener noreferrer">
                {/* <img src={`/proyects/imagen-${index}.png`} alt={`Imagen ${index}`} /> */}
                <Image
                    src={`/proyects/imagen-${index}.png`}
                    alt={`Imagen ${index}`}
                    width={527} // Ancho en píxeles (ajusta según tus necesidades)
                    height={820} // Altura en píxeles (ajusta según tus necesidades)
                />
            </a>
        </div>
    );
});

export function Proyects() {

    useEffect(() => {
        const targetDiv = document.querySelector('.alice-carousel').firstChild;
        if (targetDiv) {
            targetDiv.style.width = '100%';
            targetDiv.style.height = '100%';
        }
    }, []);

    return (
        <>
            <div id="Proyectos" className={`container pt-5 ${styles['border-container']}`} >
                <div className="row">
                    <div className="col-md-1"></div>

                    <div className={`col-md-10 ${styles['contexts']} ${styles['height-proyect']}`}>
                        <div className={`${styles['box']} borde-purple`}>
                            <div className={` ${styles['card']} `}>
                                <div className={` ${styles['content']}`}>
                                    <div className={` ${styles['back']}`}>
                                        <div className={` ${styles['back-content']}`}>
                                            <AliceCarousel
                                                autoPlay
                                                autoHeight
                                                autoPlayInterval={1000}
                                                animationDuration={1000}
                                                animationType="fadeout"
                                                infinite
                                                touchTracking={false}
                                                disableDotsControls
                                                mouseTracking
                                                keyboardNavigation
                                                items={items}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles['box']} ${styles['title-container']}`}>
                            <div className={`${styles['title']}`}>
                                <h2>Proyectos</h2>
                                <div className={`${styles['line']} `}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-1"></div>
                </div>
                <div className="row mt-5"></div>
            </div>
        </>
    );
}