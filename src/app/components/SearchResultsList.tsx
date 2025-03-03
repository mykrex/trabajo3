'use client'

import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

interface SearchResultsListProps {
    results: Array<any>;
}

export default function SearchResultsList({results}: SearchResultsListProps) {
    return(
        <div className="results-list">
            {
                results.map((result, id) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    );
}