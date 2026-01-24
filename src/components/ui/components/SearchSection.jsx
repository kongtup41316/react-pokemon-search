import { Input } from "@/components/ui/ui/input"

export default function SearchSection() {
    return (
        <div className="bg-blue-300 w-100 h-40 flex justify-center items-center rounded-md">
            <Input placeholder="Search Pokemon.. (ex.Pikachu)" className="bg-white w-75" />
        </div>
    )
}