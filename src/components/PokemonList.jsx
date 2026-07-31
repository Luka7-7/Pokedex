import {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard'
import Spinner from './Spinner'
import usePokemonByType from '../hooks/usePokemonByType'

function PokemonList({selectedType, limit, onLoadMore}) {
    const { pokemonList, loading, error, hayMas } = usePokemonByType(selectedType, limit)


    if(error){
        return (
        <p className="text-center mt-8 text-red-500">Ocurrio un error: {error}. Prueba de nuevo</p>
        )
    }
    
    return (
    <div className="pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6">
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>

        {loading && <Spinner />}

        {!loading && hayMas && (
            <div className="flex justify-center mt-4">
                <button
                    onClick={onLoadMore}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                    Cargar más
                </button>
            </div>
        )}
    </div>
)
}

export default PokemonList