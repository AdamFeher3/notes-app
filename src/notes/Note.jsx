function Note({
    data,
    addToFavorite,
    editNote,
    deleteNote
}) {

    return (
        <div style={{ backgroundColor: data.color }}
        className="note">
            <div className="note-name">{data.name}</div>
            <div className="note-content">{data.content}</div>
            <div className="note-actions">

                {/** ADD OR REMOVE FROM FAVORITES */}
                <button onClick={() => addToFavorite(data.id)}
                type="button"
                className="note-btn">{data.favorite ? "★" : "☆"}</button>

                {/** OPEN AND EDIT NOTE */}
                <button onClick={() => editNote({...data, edit: true})}
                type="button"
                className="note-btn">✎</button>

                {/** DELETE NOTE */}
                <button onClick={() => deleteNote(data.id)}
                type="button"
                className="note-btn">🗑</button>
            </div>
        </div>
    );
}

export default Note;