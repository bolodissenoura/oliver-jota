import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'
import { ButtonPix } from '../components'

export default function AprendaSerRico() {
    return (
        <div className={styles.container2}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnoseImg} ${styles.sipnose3}`}>
                        
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro2}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro2}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro2}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro2}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro2}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol3}`}>
                                    <div className={`${styles.precoLivro} ${styles.bgLivrotres}`}>
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
                        <h2 className={`${styles.colorLivrotres}`}>
                            Meu livro preferido. O qual chorei quando escrevi e choro quando leio. Desafio você a ler e não chorar.
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
