import Link from 'next/link'
import styles from '../styles/bares.module.scss'

export default function MentBaresoria() {
  return (
    <div className={styles.containerBares}>
      <div className={`row d-flex flex-row ${styles.btnRow} `}>
        <div className={`col-1 ${styles.marginBtn}`}>
          <Link href="/construindo">
            <a >
              <div className={`${styles.btnPlay} ${styles.video}`}>
              </div>

            </a>
          </Link>
        </div>
        <div className="col-1">
          <Link href="/construindo">
            <a >
              <div className={`${styles.btnPlay} ${styles.historia}`}>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
