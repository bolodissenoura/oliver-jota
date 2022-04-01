import { Caricatura } from '../components/index'
import styles from '../styles/construcao.module.scss'
import Link from 'next/link'

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
            <Link href="/"><a > Clique aqui para voltar </a></Link>

          </div>
        </div>
      </div>
    </div>
  )
}
