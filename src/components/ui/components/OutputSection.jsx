import { useEffect, useState } from "react";

// receiving pokemonName as a prop from searchSection
export default function OutputSection(){

    return (
        <div className="bg-white h-100 w-80 dark:text-black flex items-center justify-center rounded-md">
            Pokemon Picture
            {console.log("this is from output section")}
        </div>
    )
}