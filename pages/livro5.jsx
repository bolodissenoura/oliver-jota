import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'

export default function AprendaSerRico() {
    return (
        <div className={styles.container5}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnoseImg} ${styles.sipnose5}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro5}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro5}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro5}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro5}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro5}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol5}`}>
                                    <div className={`${styles.precoLivro} ${styles.bgLivrocinco}`}>
                                        <p>R$65,00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.pix}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={styles.colorLivrocinco}>
                            <h2 >
                                Neste livro você vai aprender a se desapegar dos trocados <br /> para poder ver o milhões.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
