import { GoldenWave, Coin, Oliver, MeusLivros } from '../components/index'
import styles from '../styles/Home.module.scss'

export default function Livros() {
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
        <div className="col-md-6 mt-icons">
          <MeusLivros />
        </div>
      </div>
    </div>
  )
}
