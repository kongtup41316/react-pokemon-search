import DarkModeToggle from "./DarkModeToggle";

export default function Header({children}) {
  return (
    <div className="header bg-blue-600 h-16 w-full grid grid-cols-3 items-center px-4">
      {/* this empty div is for grid spacing */}
      <div></div>
      <h1 className="text-center text-white">
        Search for Pokemon
      </h1>
      <div className="flex justify-end">
        {children}
      </div>
    </div>
  );
}
