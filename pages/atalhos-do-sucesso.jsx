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
                                src="/escrita.png"
                                alt="Titulo Livro"
                                width={150}
                                height={100}
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
                    <div className={styles.capitulos}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capitulos}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capitulos}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capitulos}>

                    </div>
                </div>
                <div className="col">
                    <div className={styles.capitulos}>

                    </div>
                </div>
                
                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={styles.ilustrativo}>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.pix}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className='col-md-8'>
                        Nos dias de hoje é comum escolher entre ter um diploma e um bom emprego, ou ter a possibilidade de se tornar rico cedo.
                    </h2>
                </div>

            </div>
        </div>
    )
}
