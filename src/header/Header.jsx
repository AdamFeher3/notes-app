import Search from "./Search";

function Header({
    setOpenNote,
    search,
    setSearch
}) {

    return (
        <header className="header">
            
            <Search
            value={search}
            onChange={setSearch}
            />
            
            {/** OPEN NEW NOTE EDITOR */}
            <button onClick={() => setOpenNote(true)}
            type="button"
            className="new-note-btn">+</button>
        </header>
    );
}

export default Header;