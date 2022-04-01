import { GoldenWave, Coin, Oliver, SobreOliver } from '../components/index'
import styles from '../styles/sobre.module.scss'

export default function Sobre() {
  return (
    <div className={styles.containerSobre}>
      <div className="row">
        <div className="col-md-4">
          <GoldenWave />
          <Coin />
        </div>
        <div className="col-md-2">
          <Oliver />
        </div>
        <div className="col-md-6 mt-icons">
          <SobreOliver />
        </div>
      </div>
    </div>
  )
}
