import { Caricatura } from '../components/index'
import styles from '../styles/construcao.module.scss'

export default function Construindo() {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-2">
          <Caricatura />
        </div>
        <div className="col-md-4 text-center">
          <div className={styles.textocontrucao}>
            <h1>Página ainda em construção🚧</h1>
            <a href="/"> Clique aqui para voltar </a>
          </div>
        </div>
      </div>
    </div>
  )
}
