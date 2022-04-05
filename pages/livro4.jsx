import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'

export default function UniversidadeInternet() {
    return (
        <div className={styles.container2}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnose} ${styles.sipnose2}`}>
                        <div className={styles.img}>
                            <Image
                                src="/capas/t4.png"
                                alt="Titulo Livro"
                                width={250}
                                height={150}
                            />
                        </div>
                        <div className={styles.text}>
                            <p>
                                Que caminho devemos tomar para construir um futuro próspero e aproveitar mais o nosso tão precioso tempo. Neste livro, vamos colocar diversas maneiras de se aprender uma profissão, pois a internet a cada dia que passa está mudando a vida da maioria das pessoas. Nunca as pessoas tiveram tantas oportunidades para ficarem famosas do dia para noite e alguns até se tornaram milionários. A profissão "PROFESSOR E PROFESSORA jamais irá acabar, pois mesmo com toda tecnologia, alguém ainda estará encarregado de ensinar e mostrar o caminho para quem está começando
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro4}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro4}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro4}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro4}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro4}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol4}`}>
                                    <div className={`${styles.precoLivro} ${styles.bgLivroquatro}`}>
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
                        <h2 className={`${styles.colorLivroquatro}`}>
                            Meu livro preferido. O qual chorei quando escrevi e choro quando leio. Desafio você a ler e não chorar.
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
