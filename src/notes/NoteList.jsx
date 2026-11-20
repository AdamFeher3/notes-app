import Note from "./Note";

function NoteList({
    notes,
    addToFavorite,
    setEdit,
    deleteNote
}) {

    return (
        <div className="note-list">

            {/** DISPLAY NOTES LIST */}
            {notes.map(n => {
                
                return <Note
                key={n.id}
                data={n}
                addToFavorite={addToFavorite}
                editNote={setEdit}
                deleteNote={deleteNote}
                />
            })}
        </div>
    );
}

export default NoteList;