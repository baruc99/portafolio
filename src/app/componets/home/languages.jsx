// languages.jsx
import Image from 'next/image';
import styles from './languages.module.css';

function PurpleSquare({ imagePath, name }) {

    const texts = {
        estrategia: 'UNA BUENA ESTRATEGIA ES LA CLAVE DEL ÉXITO. ¡LA ENCONTRARÉ!',
        planificacion: "PLANIFICO CON CONOCIMIENTO. A NADIE LE GUSTAN LAS SORPRESAS DURANTE EL PROCESO",
        desarrollo: "CADA PROYECTO TIENE PERSONALIDAD PROPIA. ¡SAQUÉMOSLA A RELUCIR!",
        lanzamiento: "MI COMPROMISO ES OFRECER GARANTÍA Y CONFIABILIDAD HASTA EL FINAL."
    }

    return (

        <div className={`borde-purple ${styles['card']} ${styles['hovered-svg']} `}>
            <Image
                src={imagePath}
                alt={name}
                width={70}
                height={70}
                className={`${styles['img']}`}
            />
            <div className={`${styles['textBox']}`}>
                <p className={`${styles['text']} ${styles['head']}`}>{name.toUpperCase()}</p>
                <p className={` ${styles.text}  ${ styles.price }`}>{texts[name]}</p>
            </div>
        </div >
    );
}


export function Languages() {
    return (
        <>
            <div className={`container ${styles['border-container']} ${styles['cards']} sin-padding`}>
                <div className={`row ${styles['posRelative']}`}>
                    <div className="col-md-1"></div>
                    <div className={`col-md ${styles['pading-text']} ${styles['posAbsolute']} `}>
                        <div className="row borde-purple">
                            <div className={`col-md-4 centrar ${styles['iniciarTrabajo']}`}>
                                Inicia tu proyecto
                            </div>
                            <div className={`col-md-8 p-4 ${styles['textCard']}`}>
                                ¿Interesado en trabajar juntos?
                                <br />
                                Compraré el café para que charlemos.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            <div className={`container ${styles['border-container']} sin-padding`}>
                <div className="row pt-5">
                    <div className="col-md-1 sin-padding"></div>
                    <div className="col-md centrar sin-padding">
                        <PurpleSquare imagePath="/home/cards/svg/estrategia.svg" name="estrategia" />
                    </div>
                    <div className="col-md centrar sin-padding">
                        <PurpleSquare imagePath="/home/cards/svg//planificacion.svg" name="planificacion" />
                    </div>
                    <div className="col-md centrar sin-padding">
                        <PurpleSquare imagePath="/home/cards/svg/desarrollo.svg" name="desarrollo" />
                    </div>
                    <div className="col-md centrar sin-padding">
                        <PurpleSquare imagePath="/home/cards/svg/lanzamiento.svg" name="lanzamiento" />
                    </div>
                    <div className="col-md-1 sin-padding"></div>
                </div>
            </div>
        </>
    );
}