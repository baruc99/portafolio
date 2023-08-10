// languages.jsx
import styles from './languages.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


export function Languages() {
    return (
        <div className={`${styles['bgLenguaje']}`}>
            <div className='container'>
                {/* <div> <FontAwesomeIcon
                    icon={faCheck}
                    className="fas fa-check"
                    style={{ color: "red", fontSize: 64 }}
                /></div> */}
                <div className='row'>
                    <div className={` col-md-3 ${styles['card']}`}>
                        <div className={`${styles['card']}`}>
                            <span>01</span>
                            <p>Estrategia</p>
                            <div className={`${styles['separator-line-thick']}`}></div>
                        </div>

                    </div>
                    <div className={` col-md-3 ${styles['card']}`}>
                        <div className={`${styles['card']}`}>
                            <span>02</span>
                            <p>Planificación</p>
                            <div className={`${styles['separator-line-thick']}`}></div>
                        </div>

                    </div>
                    <div className={` col-md-3 ${styles['card']}`}>
                        <div className={`${styles['card']}`}>
                            <span>03</span>
                            <p>Desarrollo</p>
                            <div className={`${styles['separator-line-thick']}`}></div>
                        </div>

                    </div>
                    <div className={` col-md-3 ${styles['card']}`}>
                        <div className={`${styles['card']}`}>
                            <span>04</span>
                            <p>Lanzamiento</p>
                            <div className={`${styles['separator-line-thick']}`}></div>
                        </div>

                    </div>
                </div>
                {/* <div className='row'>
                    <div className={`${styles['sizeimgLenguaje']}`}>

                        <img src="/home/desktop.svg" alt="" />
                    </div>
                </div> */}


            </div>
        </div>
    );
}
