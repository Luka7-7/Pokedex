import { useState, useEffect } from "react";

export function Fetch() {
    const [datos, setDatos] = useState(null)

    useEffect(()=> {
        fetch('https://pokeapi.co/api/v2/type')
        .then(res => res.json())
        .then(data => setDatos(data))
    }, [])
    return <div>
        {datos ? datos.count : 'Cargando...'}
        </div>
}