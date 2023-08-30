// languages.jsx
import styles from './languages.module.css';

function PurpleSquare({ imagePath }) {
    return (
        <div className={`borde-purple ${styles['square']} centrar`}>
            <img src={imagePath} alt="" />
        </div>
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
                        <PurpleSquare imagePath="/home/cards/estrategia.png" />
                    </div>
                    <div className="col-md centrar sin-padding">
                        <PurpleSquare imagePath="/home/cards/planificacion.png" />
                    </div>
                    <div className="col-md centrar sin-padding">
                        <PurpleSquare imagePath="/home/cards/desarrollo.png" />
                    </div>
                    <div className="col-md centrar sin-padding">
                        <PurpleSquare imagePath="/home/cards/lanzamiento.png" />
                    </div>
                    <div className="col-md-1 sin-padding"></div>
                </div>
            </div>
        </>
    );
}