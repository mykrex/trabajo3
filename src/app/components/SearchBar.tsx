import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar() {
    return(
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder="Type to search"/>
        </div>
    );
}