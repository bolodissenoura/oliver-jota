import React from 'react'
import Image from 'next/image'
import styles from './icons.module.scss'

export default function IconsSection() {
    return (
        <>
            <div className={styles.mticons}>
                <div className="row g-0">
                    <div className="col m-1 m-md-0">
                        <a href="">
                            <Image
                                src="/icons/jota-oliver.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Jota Oliver</p>
                        </a>
                    </div>
                    <div className="col m-1 m-md-0">
                        <a href="">
                            <Image
                                src="/icons/grupo-livro.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Grupo Oliver</p>
                        </a>
                    </div>
                    <div className="col m-1 m-md-0">
                        <a href="">
                            <Image
                                src="/icons/bares.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Bares</p>
                        </a>
                    </div>
                    <div className="col m-1 m-md-0">
                        <a href="/livros">
                            <Image
                                src="/icons/livros.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Livros</p>
                        </a>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col m-1 m-md-0">
                        <a href="">
                            <Image
                                src="/icons/cocomambo.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Cocomambo</p>
                        </a>
                    </div>
                    <div className="col m-1 m-md-0">
                        <a href="">
                            <Image
                                src="/icons/mentorias.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Mentoria</p>
                        </a>
                    </div>
                    <div className="col m-1 m-md-0">
                        <a href="">
                            <Image
                                src="/icons/podcasts.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Podcast</p>
                        </a>
                    </div>
                    <div className="col m-1 m-md-0">
                        <a href="">
                            <Image
                                src="/icons/palestras.png"
                                alt="Icone"
                                width={100}
                                height={100}
                            />
                            <p className={styles.plink}>Palestras</p>
                        </a>
                    </div>


                </div>
                <div className="row g-0">
                    <div className="col">
                        <a href="https://www.instagram.com/jotaoliveroficial/" target="_blank">
                            <Image
                                src="/icons/insta-logo.png"
                                alt="Icone"
                                width={55}
                                height={55}
                            />
                        </a>
                        <p className={styles.psocial}>Instagram</p>

                    </div>
                    <div className="col">
                        <a href="">
                            <Image
                                src="/icons/tiktok.png"
                                alt="Icone"
                                width={55}
                                height={55}
                            />
                        </a>
                        <p className={styles.psocial}>TikTok</p>

                    </div>
                    <div className="col">
                        <a href="">
                            <Image
                                src="/icons/kawai.png"
                                alt="Icone"
                                width={55}
                                height={55}
                            />
                        </a>
                        <p className={styles.psocial}>Kawai</p>

                    </div>
                    <div className="col">
                        <a href="">
                            <Image
                                src="/icons/facebook.png"
                                alt="Icone"
                                width={55}
                                height={55}
                            />
                        </a>
                        <p className={styles.psocial}>Facebook</p>

                    </div>
                    <div className="col">
                        <a href="">
                            <Image
                                src="/icons/email.png"
                                alt="Icone"
                                width={55}
                                height={55}
                            />
                        </a>
                        <p className={styles.psocial}>Email</p>

                    </div>
                    <div className="col">
                        <a href="">
                            <Image
                                src="/icons/zap.png"
                                alt="Icone"
                                width={55}
                                height={55}
                            />

                        </a>
                        <p className={styles.psocial}>Whatsapp</p>
                    </div>
                    <div className="col">
                        <a href="">
                            <Image
                                src="/icons/telegram.png"
                                alt="Icone"
                                width={55}
                                height={55}
                            />

                        </a>
                        <p className={styles.psocial}>Telegram</p>
                    </div>
                </div>
            </div>
        </>
    )
}
