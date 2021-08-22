import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pageTitle'

const Index = () => {

    return (
        <div>
            <PageTitle title='Home'></PageTitle>
            <p className="text-center font-bold">O restaurante X sempre busca por atender melhor seus clientes.<br/>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>

            <div className="py-8">
                <Link href="/pesquisa">
                    <a className="block bg-blue-500 text-center p-4 font-bold text-white mx-auto rounded shadow-md max-w-sm hover:bg-blue-600">Dar opnião ou sugestão</a>
                </Link>
            </div>

        </div>
    )
}

export default Index