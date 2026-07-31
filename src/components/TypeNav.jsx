function TypeNav( {types, selectedType, onSelectType}) {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-900 py-3 overflow-x-auto">
            <div className="flex gap-2 px-4 w-max mx-auto">
                {
                    types.map((type) => (
                        <button
                            key={type.name}
                            onClick={() => onSelectType(type.name)}
                            className={`px-4 py-2 rounded-full capitalize text-sm font-medium transition-colors ${selectedType === type.name ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                        >
                            {type.name}
                        </button>
                    ))
                }
            </div>

        </nav>
    )
}
export default TypeNav