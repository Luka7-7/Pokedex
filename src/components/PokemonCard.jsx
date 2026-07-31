function PokemonCard({ pokemon}) {
    return (
        <div className="bg-white rounded-2*1 shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform" >
            <img 
            src={pokemon.image}
            alt={pokemon.name}
            className="w-24 h-24 object-contain mb-4"
            />
            <p className= "text-xs text-black-400 border-l-black">{pokemon.name}</p>
            <p className= "text-xs text-gray-400">#{pokemon.id}</p>
        </div>
    )
}
export default PokemonCard