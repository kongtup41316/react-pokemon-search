import { Input } from "@/components/ui/ui/input"
import { Button } from "@/components/ui/ui/button"
import OutputSection from "./OutputSection"
import { useState } from "react"
import axios from "axios";

// https://pokeapi.co/api/v2/pokemon/pikachu
export default function SearchSection() {
    const [userInput, setUserInput] = useState("");
    const [pokemonData, setPokemonData] = useState(null);

    const fetchPokemonData = async(input) => {
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
            setPokemonData(response.data);
        }
        catch(err){
            console.error("Error fetching data:", err);
        }
    }

    return (
        <div className="flex items-center justify-center flex-col gap-10">
            <div className="bg-blue-400  dark:bg-gray-600 w-110 h-40 flex justify-center items-center rounded-md gap-2">
                <Input 
                    value={userInput}
                    // everytime user types in input tag, it will change the userInput state
                    onChange={(event) => setUserInput(event.target.value)}
                    placeholder="Search Pokemon.. (ex.Pikachu)" 
                    className="bg-white dark:bg-white dark:text-black w-75 dark:placeholder:text-gray-500"
                />
                <Button 
                    onClick={() => fetchPokemonData(userInput)}
                    className="cursor-pointer bg-orange-400 dark:bg-orange-400 dark:text-white hover:bg-orange-500 dark:hover:bg-orange-500 transition-bg duration-200">
                    search
                </Button>
            </div>
            <OutputSection />
        </div>
    )
}