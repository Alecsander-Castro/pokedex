import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return(

        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorum dolore laudantium minima aspernatur ab voluptas, in facilis suscipit earum esse doloribus expedita neque id iusto odit itaque perspiciatis culpa!</p>
            <Image src='/images/charizard.png' width='300' height='300' alt='Charizard'/>
        </div>
    )
}