import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'

export default function AprendaSerRico() {
    return (
        <div className={styles.container7}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnose} ${styles.sipnose7}`}>
                        <div className={styles.img}>
                            <Image
                                src="/capas/t7.png"
                                alt="Titulo Livro"
                                width={250}
                                height={150}
                            />
                        </div>
                        <div className={styles.text}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quisquam natus repellendus dolore rerum expedita reprehenderit qui sapiente laborum ratione at, vel adipisci dolorum ullam, autem recusandae, ducimus aspernatur perspiciatis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quisquam natus repellendus dolore rerum expedita reprehenderit qui sapiente laborum ratione at, vel adipisci dolorum ullam, autem recusandae, ducimus aspernatur perspiciatis.
                            </p>
                        </div>
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
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={styles.colorLivrosete}>
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
