import Card from "../components/Card";
import useQueryFetch from "../customhooks/useQueryFetch";
export interface PokemonDataType {
  "name":string,
  "url":string
}

const Home = () => {
  const {data} = useQueryFetch(['pokemons'], 'https://pokeapi.co/api/v2/pokemon?limit=150');

  return (
    <div className="p-4 dark flex justify-evenly items-center flex-wrap flex-col md:flex-row">
      {data?.data.results.map((pokemon:PokemonDataType ) => <Card key={pokemon.name} pokemon={pokemon}/> )}
    </div>
  )
}

export default Home