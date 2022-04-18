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
          <ButtonPix />
        </div>
      </div>
    </div>
  )
}
