import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'

export default function AprendaSerRico() {
    return (
        <div className={styles.container6}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnoseImg} ${styles.sipnose6}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro6}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro6}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro6}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro6}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro6}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol6}`}>
                                    <div className={`${styles.precoLivro} ${styles.bgLivroseis}`}>
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
                                Este livro eu escrevi para provar as pessoas que se somos capazes de enganar 10 trilhões de neurônios em nosso corpo para gozar, somos capazes de qualquer coisa na vida.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
