import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    return (
        <div className="flex bg-blue-600 h-full">
            <div className=" flex-1 flex items-center justify-center">
                <h1>Search for Pokemon</h1>
            </div>
            <DarkModeToggle />
        </div>
    )
}