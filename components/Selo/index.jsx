import React from 'react'
import Image from 'next/image'
import styles from './selo.module.scss'
import Link from 'next/link'

export default function Selo() {
    return (
        <>
            <div className={styles.coin}>
                <Link href="/">
                    <a >
                        <Image
                            src="/selo.png"
                            alt="Imagem de um selo escrito Jota Oliver"
                            width={180}
                            height={160}
                        />
                    </a>
                </Link>
            </div>
        </>
    )
}
