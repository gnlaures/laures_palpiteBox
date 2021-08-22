import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Header = () => {
    return(
        <React.Fragment>
            <div className={styles.wrapper}>
                <div className="container mx-auto text-center">
                    <img className="inline max-h-32" src="/logo_palpitebox.png" alt="Palpite Box"/>
                </div>
            </div>
            <div className="bg-gray-300 p-4 shadow-md mb-12">
                <ul className="container mx-auto text-center">
                    <li className="inline"><Link href="/"><a className="px-4 hover:underline">Home</a></Link></li>
                    <li className="inline"><Link href="/sobre"><a className="px-4 hover:underline">Sobre</a></Link></li>
                    <li className="inline"><Link href="/contato"><a className="px-4 hover:underline">Contato</a></Link></li>
                    <li className="inline"><Link href="/pesquisa"><a className="px-4 hover:underline">Pesquisa</a></Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header