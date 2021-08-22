import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Footer = () => {
    const {data, error} = useSWR('/api/get-promo', fetcher)

    return(
        <React.Fragment>
            { !data && <p>Carregando</p>}
            {  !error && data && data.showCoupon &&
                <p className="text-center font-bold py-12">{data.messageCoupon}</p>
            }
            <div className="bg-gray-800 p-4">
                <div className="container mx-auto text-center">
                    <p className="font-bold text-white">Project by Laures Ronak</p>
                </div>
                <div className="container mx-auto mt-2 text-center">
                    <img className="inline p-4 max-h-24" src="/logo_devpleno.png" alt="Dev Pleno"/>
                    <img className="inline p-4 max-h-24" src="/logo_semana_fsm.png" alt="Semana FSM"/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer