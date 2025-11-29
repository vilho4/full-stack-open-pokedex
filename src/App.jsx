import React from 'react'
// import { BrowserRouter as Router, Routes, Route, useMatch } from 'react-router-dom'
import { Routes, Route, useMatch } from 'react-router-dom'
import { useApi } from './useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const mapResults = (({ results }) => results.map(({ url, name }) => ({
  url,
  name,
  id: parseInt(url.match(/\/(\d+)\//)[1])
})))

const App = () => {
  const match = useMatch('/pokemon/:name')
  const { data: pokemonList, error, isLoading } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=50', mapResults)

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  let next = null
  let previous = null


  // if (match && match.params) {
  //   const pokemonIndex = pokemonList.findIndex(({ name }) => name === match.params.name)
  //   previous = pokemonList[(pokemonIndex - 1 + pokemonList.length) % pokemonList.length]
  //   next = pokemonList[(pokemonIndex + 1) % pokemonList.length]
  // }


  if (match && match.params) {
    const pokemonIndex = pokemonList.findIndex(({ name }) => name === match.params.name)

    if (pokemonIndex > 0) {
      previous = pokemonList[pokemonIndex - 1]
    }
    if (pokemonIndex < pokemonList.length - 1) {
      next = pokemonList[pokemonIndex + 1]
    }
  }


  return (
    <Routes>
      <Route exact path="/" element={<PokemonList pokemonList={pokemonList} />} />
      <Route exact path="/pokemon/:name" element={
        <PokemonPage pokemonList={pokemonList} previous={previous} next={next} />
      } />
    </Routes>
  )
}

export default App
