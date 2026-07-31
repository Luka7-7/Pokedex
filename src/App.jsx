import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import TypeNav from './components/TypeNav'
import PokemonList from './components/PokemonList'
import './App.css'

function TypePage({types}) {
  const { typeName } = useParams()
  const navigate = useNavigate()
  const [limit, setLimit] = useState(20)

  useEffect(() => {
    setLimit(20)
  }, [typeName])
      return (
      <div className='min-h-screen bg-gray-100 pb-24' >
        <header className='bg-black text-white text-center py-6 shadow-md'>
          <h1 className='text-3xl font-bold tracking-wide' >Pokedex</h1>
          <p className='capitalize text-shadow-blue-500 mt-1'>Type: {typeName}</p>
        </header>
        <PokemonList selectedType={typeName} limit={limit} onLoadMore={()=>setLimit((prev)=>prev+20)} />
        <TypeNav types={types} selectedType={typeName} onSelectType={(type)=>navigate(`/tipo/${type}`)} />

      </div>
    )
}

function App() {
  const [types, setTypes] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((res) => res.json())
      .then((data) => {
        const tiposValidos = data.results.filter((t)=>t.name !=='unknown' && t.name !== 'shadow')
        setTypes(tiposValidos)
      })
  },[])

  return (
    <Routes>
      <Route path="/" element={<TypePage types={types} />} />
      <Route path="/tipo/:typeName" element={<TypePage types={types} />} />
    </Routes>
  )

}

export default App
