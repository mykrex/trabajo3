import "./SearchResult.css";

interface SearchResultProps{
    result: any;
    onSelect: () => void;
}

export default function SearchResult({result, onSelect}: any){
    return(
        <div className="search-result" onClick={onSelect}>
            <div>{result.name}</div>
            <div>{result?.admin1}</div>
        </div>
    );
}