import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    return (
        <div className="flex bg-blue-600 h-full flex-col">
            <div className=" flex-1 flex items-center justify-center gap-4">
                <h1>Search for Pokemon</h1>
                <div>
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    )
}