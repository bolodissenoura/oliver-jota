import React from 'react'
import Image from 'next/image'
import styles from './meuslivros.module.scss'
import Link from 'next/link'

export default function MeusLivros() {
    return (
        <>
            <div className={styles.mticons}>
                <div className="row g-0">
                    <div className="col m-1 px-2 ">
                        <Link href="/livro1">
                            <a>
                                <Image
                                    src="/livros/1l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        <Link href="/livro2">
                            <a>
                                <Image
                                    src="/livros/2l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        <Link href="/livro3">
                            <a>
                                <Image
                                    src="/livros/3l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        <Link href="/livro4">
                            <a>
                                <Image
                                    src="/livros/4l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        <Link href="/livro5">
                            <a>
                                <Image
                                    src="/livros/5l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                </div>





                <div className="row g-0">
                    
                    <div className="col m-1 px-2 ">
                        <Link href="/livro6">
                            <a>
                                <Image
                                    src="/livros/6l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        <Link href="/livro7">
                            <a>
                                <Image
                                    src="/livros/7l.png"
                                    alt="Icone"
                                    width={150}
                                    height={230}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        <Link href="/livro8">
                            <a>
                                <Image
                                    src="/livros/8l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        <Link href="/livro9">
                            <a>
                                <Image
                                    src="/livros/9l.png"
                                    alt="Icone"
                                    width={150}
                                    height={250}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col m-1 px-2 ">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
