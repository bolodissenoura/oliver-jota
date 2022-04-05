import React from 'react'
import Image from 'next/image'
import styles from '../styles/livrosection.module.scss'

export default function AprendaSerRico() {

    return (
        <div className={styles.container7}>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={`${styles.sipnoseImg} ${styles.sipnose7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa1livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa2livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa3livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa4livro7}`}>

                    </div>
                </div>
                <div className="col">
                    <div className={`${styles.capa} ${styles.capa5livro7}`}>

                    </div>
                </div>

                <div className="row offset-md-4 ">
                    <div className={styles.sectionpagamento}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={`${styles.precoGeral} ${styles.precol7}`}>
                                    <div className={`${styles.precoLivro} ${styles.bgLivrosete}`}>
                                        <p>R$65,00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.pix}>

                                </div>
                                <div className={styles.btnPix}>
                                    <input className={styles.inputPix} type="text" value="00020126580014BR.GOV.BCB.PIX013678170133-74da-44a5-acf0-02f6db1752055204000053039865802BR5925David da Cunha Pinto Oliv6009SAO PAULO61080540900062070503***630447CC" id="myInput" />
                                    <button className={styles.button50} onClick={() => {
                                        /* Get the text field */
                                        var copyText = document.getElementById("myInput");

                                        /* Select the text field */
                                        copyText.select();
                                        copyText.setSelectionRange(0, 99999); /* For mobile devices */

                                        /* Copy the text inside the text field */
                                        navigator.clipboard.writeText(copyText.value);

                                        /* Alert the copied text */
                                        alert("Código Pix copiado, basta ir em seu app do banco na seção Pix copia e cola e colar seu código: " + copyText.value);
                                    }} ><span>Clique aqui para copiar o Código PIX</span></button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className={styles.colorLivrosete}>
                            <h2 >
                                Aqui resolvi fazer uma comparação de quanto nos preocupamos com nossos corpos e nos esquecemos de nossas almas.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
