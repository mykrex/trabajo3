import "./SearchResult.css";

export default function SearchResult({result}: any){
    return(
        <div className="search-result" onClick={(e) => alert(`Clicked on ${result.name}`)}>{result.name}</div>
    );
}