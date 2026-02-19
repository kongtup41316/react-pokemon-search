import { useEffect, useState } from "react";

// receiving pokemonName as a prop from searchSection
export default function OutputSection({pokemonPhoto, pokemonName}){

    return (
        <div className="bg-white h-100 w-80 dark:text-black flex items-center justify-center rounded-md flex-col">
            <img src={pokemonPhoto} alt="this is pokemon image" />
            <p>{pokemonName}</p>
        </div>
    )
}