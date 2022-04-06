import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'
import { ButtonPix } from '../components'

export default function AprendaSerRico() {

    return (
        <div className={styles.container7}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnoseImg} ${styles.sipnose7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro7}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol7}`}>
                                    <div className={`${styles.precoLivro} ${styles.bgLivrosete}`}>
                                        <p>R$65,00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.pix}>

                                </div>
                                <ButtonPix/>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={styles.colorLivrosete}>
                            <h2 >
                                Aqui resolvi fazer uma comparação de quanto nos preocupamos com nossos corpos e nos esquecemos de nossas almas.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
