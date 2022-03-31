import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'

export default function AtalhosSucesso() {
    return (
        <div className={styles.container1}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={styles.sipnose}>
                        <div className={styles.img}>
                            <Image
                                src="/capas/t2.png"
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
                    <div className={styles.capa1}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capa2}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capa3}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capa4}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capa5}>

                    </div>
                </div>
                
                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={styles.precol1}>
                                    <div className={styles.precoLivro}>
                                        <p>R$64,00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.pix}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className='col-md-8'>
                        O livro que conta a história da minha vida. De maneira fácil de entender e te motivar, mostrando com a minha história que tudo é possível !
                    </h2>
                </div>

            </div>
        </div>
    )
}
