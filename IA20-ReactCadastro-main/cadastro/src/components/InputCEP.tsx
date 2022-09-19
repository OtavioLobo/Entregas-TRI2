import { useEffect, useState } from "react"

type props = {
    uf: string
}

export default function ({ uf }: props) {
    const [cep, setCEP] = useState([])
    const [loading, setLoading] = useState(true)

    async function buscarCEP() {
        setLoading(true)
        if (!uf) return
        const requestCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const cep = await requestCEP.json()
        setLoading(false)
        setCEP(cep)
    }

    useEffect(() => {
        buscarCEP()
    }, [uf])

    return <>
        {loading
            ? <span>loading CEP</span>
            : <select>{cep.map(({ nome }, idx) => <option key={idx}>{nome}</option>)}</select>
        }
    </>
}
