import Link from 'next/link'
import { SobreMentoria } from '../components'
import styles from '../styles/mentoria.module.scss'

export default function Mentoria() {
  return (
    <div className={styles.containerMentoria}>
      <div className="row mx-4">
        <div className="col-md-6">
        </div>
        <div className="col-md-6">
          <SobreMentoria />

        </div>

      </div>
      <div className={`row justify-content-md-center ${styles.btnRow}`}>
        <div className="col">
          
        </div>
        <div className="col">
          <Link href="/depoimento">
            <a >
              <div className={`${styles.btnPlay} ${styles.depoimento}`}>
              </div>

            </a>
          </Link>
        </div>
        <div className="col">
          <Link href="">
            <a >
              <div className={`${styles.btnPlayParticipar} ${styles.entrevista}`}>
              </div>

            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
