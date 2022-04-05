import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'

export default function AprendaSerRico() {
    return (
        <div className={styles.container8}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnoseImg} ${styles.sipnose8}`}>
                        
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro8}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro8}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro8}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro8}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro8}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol8}`}>
                                    <div className={`${styles.precoLivro} ${styles.bgLivroum}`}>
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
                        <div className={styles.colorLivrooito}>
                            <h2 >
                                Eu consegui ler a Bíblia de capa a capa 3 vezes e pude perceber que seu personagem principal Jesus Cristo falava absolutamente tudo em forma de parábola, pois assim, todos se identificavam com a história simples e etendiam claramente o recado.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
