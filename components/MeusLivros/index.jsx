import React from 'react'
import Image from 'next/image'
import styles from './meuslivros.module.scss'

export default function MeusLivros() {
    return (
        <>
            <div className={styles.mticons}>
                <div className="row g-0">
                    <div className="col m-2 m-md-3">
                        <a href="/atalhos-do-sucesso">
                            <Image
                                src="/livros/1l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                    <div className="col m-2 m-md-3">
                        <a href="">
                            <Image
                                src="/livros/2l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                    <div className="col m-2 m-md-3">
                        <a href="">
                            <Image
                                src="/livros/3l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                    <div className="col m-2 m-md-3">
                        <a href="/livros">
                            <Image
                                src="/livros/4l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col m-2 m-md-3">
                        <a href="">
                            <Image
                                src="/livros/5l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                    <div className="col m-2 m-md-3">
                        <a href="">
                            <Image
                                src="/livros/6l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                    <div className="col m-2 m-md-3">
                        <a href="">
                            <Image
                                src="/livros/7l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                    <div className="col m-2 m-md-3">
                        <a href="">
                            <Image
                                src="/livros/8l.png"
                                alt="Icone"
                                width={150}
                                height={200}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
