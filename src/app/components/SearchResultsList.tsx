'use client'

import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

interface SearchResultsListProps {
    results: Array<any>;
    onSelectCity: (city: string, latitude: number, longitude: number) => void;
}

export default function SearchResultsList({results, onSelectCity}: SearchResultsListProps) {
    return(
        <div className="results-list">
            {
                results.map((result, id) => (
                    <SearchResult 
                    key={id} 
                    result={result} 
                    onSelect={() => onSelectCity(result.name, result.latitude, result.longitude)}
                    />
                ))
            }
        </div>
    );
}