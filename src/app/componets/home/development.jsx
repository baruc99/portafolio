import styles from './development.module.css';

export function Development() {
    return (
        <>
            <div className={`container ${styles['border-container']} ${styles['developement']}`}>
                <div className="row">
                    <div className="col-md-1"></div>

                    <div className={`col-md-10 ${styles['contexts']} `}>
                        <div className={` ${styles['text-dev']} ${styles['box']}`}>
                            <h2>Desarrollo</h2>
                            <div className={`${styles['line']} `}></div>
                        </div>
                        <div className={`${styles[`text-description`]} ${styles['box']}`}>
                            <p>
                                Una vez que el diseño está listo, es hora de
                                hacer que su concepto viva. Aquí es cuando
                                mis habilidades de programación serán
                                necesarias. Transformo cualquier diseño en
                                un producto final de alta calidad con control
                                perfecto de píxeles.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    );
}