import { Input } from "@/components/ui/ui/input"

export default function SearchSection() {
    return (
        <div className="bg-gray-600 w-100 h-40 flex justify-center items-center rounded-md">
            <Input placeholder="Search Pokemon.. (ex.Pikachu)" className="bg-white dark:bg-white dark:text-black w-75" />
        </div>
    )
}