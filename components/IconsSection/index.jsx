import React from 'react'
import Image from 'next/image'
import styles from './icons.module.scss'

export default function IconsSection() {
    return (
        <>
            <div className={styles.mticons}>
                <div className="row">
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/jota-oliver.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Jota Oliver</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/grupo-livro.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Grupo Oliver</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/bares.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Bares</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/livros.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Livros</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/telegram.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Telegram</p>
                        </a>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/cocomambo.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Cocomambo</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/mentorias.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Mentoria</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/podcasts.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Podcast</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/palestras.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Palestras</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/zap.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Whatsapp</p>
                        </a>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/insta-logo.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Instagram</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/tiktok.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>TikTok</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/kawai.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Kawai</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/facebook.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Facebook</p>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <a href="">
                            <Image
                                src="/icons/email.png"
                                alt="Icone"
                                width={80}
                                height={80}
                            />
                            <p className={styles.plink}>Email</p>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
