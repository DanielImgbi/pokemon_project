import axios, { AxiosResponse } from "axios";
import { PokemonDataType } from "../pages/Home"
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./context/themeContext";

interface CardProps{
    pokemon: PokemonDataType;
}

const Card = ({pokemon}:CardProps) => {
    const [data, setData] = useState<AxiosResponse>();
    const themeContext = useContext(ThemeContext);

    useEffect(() => { 
        const response = async () => {
            const data = await axios.get(pokemon.url);
            setData(data)
            return data
        }
        response();
    })



    return (
    <div className={` mt-5 h-60 w-5/6 md:w-60 pb-4 rounded-lg relative shadow-md ${ themeContext?.theme === 'dark' ? "bg-opacity-5 bg-white" : ''}`}>
        <div className=" h-3/5 w-2/2 rounded-t-lg">
            <img src={data?.data.sprites.other.dream_world.front_default} className="rounded-t-lg h-full w-full"/>
        </div>
        <h2 className={`p-4 w-2/2 font-bold space-x-10 ${themeContext?.theme === 'light' ? 'text-light-text' : 'text-dark-text'}`}>
            {pokemon.name}
        </h2>
        <div className=" absolute h-12 w-12 right-0">
            <img src="GIF's/ball.png" alt="" />
        </div>
    </div>
  )
}

export default Card