function Search({
    value,
    onChange
}) {

    return (
        <div className="search-field">
            
            {/** NOTE SEARCH INPUT */}
            <span>🔎︎</span>
            <input onChange={e => onChange(e.target.value)}
            value={value}
            placeholder="Search notes..."
            type="text"
            className="search-input"/>
        </div>
    );
}

export default Search;