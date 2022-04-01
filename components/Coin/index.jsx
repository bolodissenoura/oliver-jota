import React from 'react'
import Image from 'next/image'
import styles from './coin.module.scss'
import Link from 'next/link'

export default function Coin() {
    return (
        <>
            <div className={styles.coin}>
                <Link href="/construindo">
                    <a >
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
