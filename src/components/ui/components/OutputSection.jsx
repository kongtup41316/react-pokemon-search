import { useEffect, useState } from "react";
import axios from "axios";

export default function OutputSection(){
// https://pokeapi.co/api/v2/pokemon/pikachu
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async (pokemonName) => {
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                setPokemonData(response.data);
            }
            catch(err){
                console.error("Error fetching data:", err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="bg-white h-100 w-80 dark:text-black flex items-center justify-center rounded-md">
            Pokemon Picture
        </div>
    )
}