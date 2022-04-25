import Link from 'next/link'
import { ButtonPix, SobreMentoria } from '../components'
import styles from '../styles/garanta.module.scss'

export default function Garanta() {
  return (
    <div className={styles.containerGaranta}>
      <div className={`row ${styles.btnRow}`}>
        <div className="col-md-6">

        </div>
        <div className="col-md-6">
          <div className={styles.pix}>

          </div>
          <h1 className={styles.preco}>APENAS R$999,99</h1>
          <ButtonPix />
        </div>
      </div>
    </div>
  )
}
