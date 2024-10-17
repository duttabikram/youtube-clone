import { SearchBar } from "./Searchbar"

export const Appbar = () => {
    return <div className="flex justify-between	pl-3 pr-3 pt-1">
        <div className={"text-white-800 text-l font-medium"}>
        ▶️ Youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div className={"text-white-800 text-l font-medium"}>
        Logout
        </div>
    </div>
}