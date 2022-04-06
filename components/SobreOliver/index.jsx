import Link from 'next/link'
import React from 'react'
import styles from './sobre.module.scss'

export default function SobreOliver() {
    return (
        <>
            <div className={styles.mticons}>
                <div className="row g-0">
                    <div className={styles.box}>
                        <h1>Quem é Jota Oliver ?</h1>
                        <p>
                            Com mais de 30 anos de experiênncia em montagem de bares, até hoje já participou da elaboração de 453 casas etre bares, baladas, boates e restaurantes. Começou do zero, pintando paredes, cortado madeiras, aplicando adesivos e aprendi tudo que era necessário para montar bares cada vez mais baratos e que fizessem sucesso. No começo era somente para clientes, pois não tinha capital para montar seu próprio bar. O tempo passou e começou a montar os seus próprios bares, e ao logo de 20 aos foram muitas falências as quais me deram a experiência necessária para desenvolver a fórmula perfeita de um bar que atende pessoas de todas as idades e classes sociais e se adapta a qualquer cultura ou lugar. Atualmente, criador e CEO da COCOMAMBO, criador e CEO do GRUPO OLIVER, detentor de 6 marcas de bares, escritor, autor, palestrante, Designer-Bar, Cripto-entusiasta ... 
                        </p>
                    </div>
                    <div className="col-1">
                        <Link href="https://youtu.be/2rg4bDYodmE">
                            <a target="_blank">
                                <div className={styles.buttonPlay}></div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link href="/sobre">
                            <a>
                                <div className={styles.buttonFotos}></div>
                            </a>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
