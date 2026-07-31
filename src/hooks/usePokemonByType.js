import {useState, useEffect} from 'react'

function usePokemonByType(selectedType, limit) {
    const [allPokemonUrls, setAllPokemonUrls] = useState([])
    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchPokemonByTypeUrls(){
            setLoading(true)
            setError(null)

            try {
            const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
            if (!res.ok) {
                throw new Error(`Error ${res.status} al pedir el tipo`)
            }
            const data = await res.json()
            setAllPokemonUrls(data.pokemon.map(entry => entry.pokemon.url))
            setPokemonList([])
            } catch(err){
                setError(err.message)
                setLoading(false)
            }
            }
            fetchPokemonByTypeUrls()
        }, [selectedType])
    useEffect(() => {
        if(allPokemonUrls.length === 0) return

        async function fetchDetails(){
            setLoading(true)
            try {
                const urlMostrar = allPokemonUrls.slice(0, limit)   
                const detalles = await Promise.all(urlMostrar.map(async(url) => {
                    const res = await fetch(url)
                    if (!res.ok) {
                        throw new Error(`Error ${res.status} al pedir el pokemon`)
                    }
                    const detalle = await res.json()
                    return {
                        id: detalle.id,
                        name: detalle.name,
                        image: detalle.sprites.other['official-artwork'].front_default,
                    }
                }))
                setPokemonList(detalles)
            }catch(err){
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchDetails()
    }, [allPokemonUrls, limit])
    const hayMas = pokemonList.length < allPokemonUrls.length
    return { pokemonList, loading, error, hayMas, total: allPokemonUrls.length }
}

export default usePokemonByType