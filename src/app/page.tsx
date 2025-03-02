import Image from "next/image";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-stretch min-h-screen w-full">
        <Navigation/>
        
        <main className="flex flex-col gap-8 items-center justify-items-center">
            <h1 className="text-4xl font-bold"> How is the weather?</h1>

            <div className="search-bar-container">
              <SearchBar />
            </div>
         </main>
    </div>
  );
}
