import React from 'react'
import styles from './btnpix.module.scss'

export default function ButtonPix() {
    return (
        <>
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
        </>
    )
}
