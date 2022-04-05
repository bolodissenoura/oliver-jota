import React from 'react'
import Image from 'next/image'
import styles from './icons.module.scss'
import Link from 'next/link'

export default function IconsSection() {
    return (
        <>
            <div className={styles.mticons}>
                <div className="row g-0">
                    <div className="col m-1 m-md-0">
                        <Link href="/sobre">
                            <a  >
                                <Image
                                    src="/icons/jota-oliver.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Jota Oliver</p>
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 m-md-0">
                        <Link href="/construindo">
                            <a  >
                                <Image
                                    src="/icons/grupo-livro.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Grupo Oliver</p>
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 m-md-0">
                        <Link href="/construindo">
                            <a  >
                                <Image
                                    src="/icons/bares.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Bares</p>
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 m-md-0">
                        <Link href="/livros">
                            <a  >
                                <Image
                                    src="/icons/livros.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Livros</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col m-1 m-md-0">
                        <Link href="https://www.youtube.com/watch?v=jY5LHeyTx9s">
                            <a  >
                                <Image
                                    src="/icons/cocomambo.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Cocomambo</p>
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 m-md-0">
                        <Link href="/construindo">
                            <a  >
                                <Image
                                    src="/icons/mentorias.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Mentoria</p>
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 m-md-0">
                        <Link href="https://youtu.be/7mu2Flv1ZDA">
                            <a target="_blank" >
                                <Image
                                    src="/icons/podcasts.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Podcast</p>
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 m-md-0">
                        <Link href="/construindo">
                            <a target="_blank" >
                                <Image
                                    src="/icons/palestras.png"
                                    alt="Icone"
                                    width={100}
                                    height={100}
                                />
                                <p className={styles.plink}>Palestras</p>
                            </a>
                        </Link>
                    </div>


                </div>
                <div className="row g-0">
                    <div className="col">
                        <Link href="https://www.instagram.com/jotaoliveroficial/" target="_blank">
                            <a target="_blank" >
                                <Image
                                    src="/icons/insta-logo.png"
                                    alt="Icone"
                                    width={55}
                                    height={55}
                                />
                            </a>
                        </Link>

                        <p className={styles.psocial}>Instagram</p>


                    </div>
                    <div className="col">
                        <Link href="https://www.tiktok.com/@jotaoliveroficial?lang=pt-BR">
                            <a target="_blank" >
                                <Image
                                    src="/icons/tiktok.png"
                                    alt="Icone"
                                    width={55}
                                    height={55}
                                />
                            </a>
                        </Link>
                        <p className={styles.psocial}>TikTok</p>

                    </div>
                    <div className="col">
                        <Link href="https://s.kw.ai/u/wQpgBwzD">
                            <a target="_blank" >
                                <Image
                                    src="/icons/kawai.png"
                                    alt="Icone"
                                    width={55}
                                    height={55}
                                />
                            </a>
                        </Link>
                        <p className={styles.psocial}>Kawai</p>

                    </div>
                    <div className="col">
                        <Link href="https://www.facebook.com/joseluis.oliver.581">
                            <a target="_blank" >
                                <Image
                                    src="/icons/facebook.png"
                                    alt="Icone"
                                    width={55}
                                    height={55}
                                />
                            </a>
                        </Link>
                        <p className={styles.psocial}>Facebook</p>

                    </div>
                    <div className="col">
                        <Link href="mailto:oliverdecorador@hotmail.com">
                            <a target="_blank" >
                                <Image
                                    src="/icons/email.png"
                                    alt="Icone"
                                    width={55}
                                    height={55}
                                />
                            </a>
                        </Link>
                        <p className={styles.psocial}>Email</p>

                    </div>
                    <div className="col">
                        <Link href="https://api.whatsapp.com/send?phone=5521971430135&text=Oi%2Cvim%20pelo%20site%20e%20quero%20mudar%20de%20vida">
                            <a target="_blank" >
                                <Image
                                    src="/icons/zap.png"
                                    alt="Icone"
                                    width={55}
                                    height={55}
                                />
                            </a>
                        </Link>
                        <p className={styles.psocial}>Whatsapp</p>
                    </div>
                    <div className="col">
                        <Link href="https://t.me/+qRygcyT4-l01OTAx">
                            <a target="_blank" >
                                <Image
                                    src="/icons/telegram.png"
                                    alt="Icone"
                                    width={55}
                                    height={55}
                                />
                            </a>
                        </Link>
                        <p className={styles.psocial}>Telegram</p>
                    </div>
                </div>
            </div>
        </>
    )
}
