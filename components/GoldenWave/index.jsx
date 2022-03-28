import React from 'react'
import Image from 'next/image'
import styles from './goldenwave.module.scss'

export default function GoldenWave() {
  return (
    <>
      <div className={styles.lateral}>
        <Image
          src="/background/lateral.png"
          alt="a"
          width={400}
          height={700}
        />
      </div>

    </>
  )
}
