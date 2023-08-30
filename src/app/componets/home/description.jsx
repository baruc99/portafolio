import styles from './description.module.css'

export function Description() {
    return (
        <>
            <div className={`container ${styles['border-container']} ${styles['height-description']}`}>
                <div className="row sin-padding">
                    <div className="col-md-1 sin-padding"></div>

                    <div className="col-md-10 sin-padding">
                        <div className={`borde-purple ${styles['card']} ${styles['contexts']}`}>
                            <div className={`${styles['box']} centrar`}> 
                                <img src="/home/avatar.png" alt="avatar" />
                            </div>
                            <div className={`${styles['box']}`}>
                                <p>
                                    Apasionado de las tecnologías web. 
                                    Me encanta trabajar con nuevos retos 
                                    y crear nuevos productos. 
                                    Creo experiencias web memorables.
                                </p>
                                <p>
                                    Viviendo, aprendiendo y subiendo de nivel 
                                    un día a la vez.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-1 sin-padding"></div>
                </div>
            </div>

        </>
    );
}