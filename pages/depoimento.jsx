import Link from 'next/link'
import styles from '../styles/depoimento.module.scss'

export default function Depoimento() {
  return (
    <div className={styles.containerMentoria}>
      <div className="row mx-4">
        <div className="col-md-6">
          <div className={styles.firstSection}>
            <div className={styles.sectionImg}>
              <p className={styles.sectionP}>
                Mas quando ele me procurou para fazer minha MENTORIA.
                ele estava colhendo café na lavoura.  Um brasileiro trabalhador
                e sonhador como qualquer outro, com um potencial enorme
                mas não conhecia a sua capacidade e sua força.
                Qual a chance de uma pessoa comum sair de Boia Fria
                para o Presidente de um instituto respeitado?
                Talvez, suas referências de sucesso venham de pessoas
                que nunca tiveram sucesso e isso te trava.

              </p>
            </div>

          </div>
        </div>
        <div className="col-md-5">
          <div className={styles.firstSection}>
            <p className={styles.sectionP2}>
              A informação certa pode te destravar de antigos pensamentos e mudar totalmente a sua vida. Minha maneira direta de falar,
              abriu os olhos de milhares de
              pessoas como o Daniel. <br />
              Só falta você.

            </p>
            <div className={styles.sectionImg2}>

            </div>


          </div>
          

        </div>

      </div>
      <div className={`row justify-content-md-center ${styles.btnRow}`}>
            <div className="col">
              <Link href="">
                <a >
                  <div className={`${styles.btnPlay} ${styles.depoimento}`}>
                  </div>

                </a>
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <a >
                  <div className={`${styles.btnPlay} ${styles.entrevista}`}>
                  </div>

                </a>
              </Link>
            </div>
            <div className="col">
              <Link href="">
                <a >
                  <div className={`${styles.btnPlay} ${styles.entrevista}`}>
                  </div>

                </a>
              </Link>
            </div>
          </div>
    </div>
  )
}
