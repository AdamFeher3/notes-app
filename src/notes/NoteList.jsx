import Note from "./Note";

function NoteList({
    notes,
    addToFavorite,
    setEdit,
    deleteNote
}) {

    return (
        <div className="note-list">

            {notes.map(n => {
                
                return <Note
                key={n.id}
                data={n}
                addToFavorite={addToFavorite}
                setEdit={setEdit}
                deleteNote={deleteNote}
                />
            })}
        </div>
    );
}

export default NoteList;