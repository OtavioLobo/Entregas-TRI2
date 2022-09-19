import { useState } from "react";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import InputCEP from "../components/InputCEP";
import "../styles/tabDadosDeEndereco.css"

export default function() {
    const [uf, setUf] = useState("")

    return <>
        <h1>Dados de Endereço</h1>
        <InputEstados setUf={setUf} />
        <InputCidades uf={uf} />
        <InputCEP uf={uf} />
    </>
}