import React, {useState} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PageTitle from '../components/pageTitle'

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Whatsapp: '',
        Email: '',
        Nota: 5
    })
    const notas = [0,1,2,3,4,5]
    const [sucess, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch(err) {

        }
    }
    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }
    return (
        <div className="mx-auto block max-w-screen-sm">
            <PageTitle title='Pesquisa'></PageTitle>
            <h1 className="text-center font-bold mb-4 text-2xl">Críticas e Sugestões</h1>
            <p className="text-center mb-6">O restaurante X sempre busca por atender melhor seus clientes.<br/>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            {!sucess && <div className="mx-auto w-64">
                <label className="block font-bold">Seu nome:</label>
                <input className="px-4 block bg-blue-100 w-full leading-10 rounded shadow focus:bg-blue-200" type="text" placeholder='Nome' onChange={onChange} name='Nome'/>
                <label className="block font-bold">Seu Whatsapp:</label>
                <input className="px-4 block bg-blue-100 w-full leading-10 rounded shadow focus:bg-blue-200" type="text" placeholder='Whatsapp' onChange={onChange} name='Whatsapp'/>
                <label className="block font-bold">Seu E-mail:</label>
                <input className="px-4 block bg-blue-100 w-full leading-10 rounded shadow focus:bg-blue-200" type="text" placeholder='E-mail' onChange={onChange} name='Email'/>

                <div className="text-center mt-4">
                    {notas.map(nota => {
                        return (<label>{nota}<input type="radio" name="Nota" value={nota} className="mr-4 ml-1 relative top-0.25" onChange={onChange}/></label>)
                    })}
                </div>

                <button onClick={save} className="mt-4 block bg-blue-500 text-center p-4 font-bold text-white mx-auto rounded shadow-md hover:bg-blue-600 w-full">Salvar</button>
            </div>}
            {sucess && <div>
                <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 pc-4 py-3 mb-6">
                    <p className="block text-center">Sua opinião foi enviada, obrigado pelo seu feedback.</p>
                </div>
                {
                    retorno.showCoupon && <div className="text-center">
                        <span className="font-bold mb-4">Seu cupom:</span> <br/>
                        <span className="text-4xl font-light">{JSON.stringify(retorno.Cupom)}</span>
                        <span className="block text-center text-2xm">Apresente este cupom ao garçom ou no caixa do estabelecimento.</span>
                    </div>
                }
            </div>}
        </div>
    )
}

export default Pesquisa