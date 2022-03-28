import Head from 'next/head'
import Image from 'next/image'
import { GoldenWave, Coin, Oliver, IconsSection } from '../components/index'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-4">
          <GoldenWave />
          <Coin />
        </div>
        <div className="col-md-2">
          <Oliver />
        </div>
        <div className="col mt-icons">
          <IconsSection />
        </div>
      </div>
    </div>
  )
}
