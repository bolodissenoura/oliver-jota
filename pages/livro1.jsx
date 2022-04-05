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
                                src="/capas/t1.png"
                                alt="Titulo Livro"
                                width={250}
                                height={150}
                            />
                        </div>
                        <div className={styles.text}>
                            <p>
                            A única atividade que vc vai conseguir ganhar dinheiro na vida é a venda. Mesmo o melhor médico, o melhor engenheiro, o melhor advogado ou até mesmo o melhor pastor, se não souber vender seu trabalho ou suas ideias, ele não irá prosperar. Riqueza não tem Nada haver com faculdade ou escola. Isso está ligado diretamente aos nossos sonhos, nossos objetivos.Não existe outra maneira de se conseguir dinheiro que não seja através da compra e da venda. Por tanto, comece a se mexer e aprenda a se vender. Aprenda a vender o seu trabalho ou o seu produto. Isso será a diferença entre você e os outros Realmente somos do tamanho do nosso sonho. Quanto mais alto conseguirmos enxergar, maior será o nosso sucesso.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro1}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro1}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro1}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro1}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro1}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol1}`}>
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
                        <h2 className={`${styles.colorLivroum} `}>
                            O livro que conta a história da minha vida. De maneira fácil de entender e te motivar, mostrando com a minha história que tudo é possível !
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
