import React from 'react'
import Image from 'next/image'
import styles from './coin.module.scss'

export default function Coin() {
    return (
        <>
            <div className={styles.coin}>
                <Image
                    src="/coin.png"
                    alt="Imagem de uma Moeda"
                    width={150}
                    height={150}
                />
            </div>
        </>
    )
}
