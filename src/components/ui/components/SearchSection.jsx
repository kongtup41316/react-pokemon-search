import { Input } from "@/components/ui/ui/input"
import { Button } from "@/components/ui/ui/button"

export default function SearchSection() {
    return (
        <div className="bg-blue-400  dark:bg-gray-600 w-110 h-40 flex justify-center items-center rounded-md gap-2">
            <Input placeholder="Search Pokemon.. (ex.Pikachu)" className="bg-white dark:bg-white dark:text-black w-75 dark:placeholder:text-gray-500" />
            <Button className="cursor-pointer bg-orange-400 dark:bg-orange-400 dark:text-white hover:bg-orange-500 dark:hover:bg-orange-500 transition-bg duration-200">search</Button>
        </div>
    )
}