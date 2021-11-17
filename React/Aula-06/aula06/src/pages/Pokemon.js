import React from 'react'
import {useState, useEffect} from "react"
import api from '../api2'
const Pokemon = () =>{
  const [pokemons,setPokemons] = useState([])
  const [pokemonPesquisar,setPokemonPesquisar] = useState([])
  console.log(pokemons)
  const adicionarALista = (pokemonId) =>{
    (async ()=>{
      const {data} = await api.get(`/${pokemonId}`)
      setPokemons([...pokemons,{nome:data.name,id:data.id,img:data.sprites.front_default}])
    })()
  }
  return(
    <>
      <h1>Pokemon</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        adicionarALista(pokemonPesquisar)
      }}>
        <input onChange={(e)=>{
          setPokemonPesquisar(e.target.value)
        }} type="text"></input>
        <input type="submit" value="Pesquisar"></input>
      </form>
      <ul>
        {pokemons.map((pokemon)=>(
          <li key={pokemon.id}>
            <p>{pokemon.nome}</p>
            <img src={pokemon.img}></img>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Pokemon;