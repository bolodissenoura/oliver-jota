import React from 'react'
import styles from './sobre.module.scss'

export default function SobreOliver() {
    return (
        <>
            <div className={styles.mticons}>
                <div className="row g-0">
                    <div className={styles.box}>
                        <h1>Quem é Jota Oliver ?</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nobis commodi ratione quos iste itaque officiis sed voluptatibus culpa quam beatae quibusdam doloribus, reiciendis at voluptates fugit ad aut quo ab. Ipsam, doloribus assumenda labore, eligendi, expedita repudiandae error odio porro omnis et animi saepe debitis! Optio, ullam rem modi fugit iusto, accusamus, perspiciatis adipisci tenetur unde ab iste numquam cumque atque perferendis ducimus. Eius deleniti repellat doloribus non veniam officia atque, asperiores corporis repudiandae ea odit molestias aliquid saepe.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nobis commodi ratione quos iste itaque officiis sed voluptatibus culpa quam beatae quibusdam doloribus, reiciendis at voluptates fugit ad aut quo ab. Ipsam, doloribus assumenda labore, eligendi, expedita repudiandae error odio porro omnis et animi saepe debitis! Optio, ullam rem modi fugit iusto, accusamus, perspiciatis adipisci tenetur unde ab iste numquam cumque atque perferendis ducimus. Eius deleniti repellat doloribus non veniam officia atque, asperiores corporis repudiandae ea odit molestias aliquid saepe.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <a href="">
                            <div className={styles.buttonPlay}></div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="">
                            <div className={styles.buttonFotos}></div>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
