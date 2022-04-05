import React from 'react'
import Image from 'next/image'
import styles from './coin.module.scss'
import Link from 'next/link'

export default function Coin() {
    return (
        <>
            <div className={styles.coin}>
                <Link href="/documents/white-paper-free-coin.pdf">
                    <a target="_blank" rel="nofollow noopener">
                        <Image
                            src="/coin.png"
                            alt="Imagem de uma Moeda"
                            width={150}
                            height={150}
                        />
                    </a>
                </Link>
            </div>
        </>
    )
}
