import { GoldenWave, Selo, Caricatura, MeusLivros } from '../components/index'
import styles from '../styles/Home.module.scss'

export default function Livros() {
  return (
    <div className={styles.containerLivros}>
      <div className="row">
        <div className="col-md-4">
          <Selo />
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-6">
          <MeusLivros />
        </div>
      </div>
    </div>
  )
}
