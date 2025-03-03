'use client'

import {useState} from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";

export default function Home() {

  const [results, setResults] = useState([]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-stretch min-h-screen w-full">
        <Navigation/>
        
        <main className="flex flex-col gap-8 items-center justify-items-center">
            <h1 className="text-4xl font-bold"> How is the weather?</h1>

            <div className="search-bar-container">
              <SearchBar setResults={setResults} />
              <SearchResultsList results={results} />
            </div>
         </main>
    </div>
  );
}
