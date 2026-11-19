function Note({
    data,
    addToFavorite,
    setEdit,
    deleteNote
}) {

    return (
        <div style={{ backgroundColor: data.color }}
        className="note">
            <div className="note-name">{data.name}</div>
            <div className="note-content">{data.content}</div>
            <div className="note-actions">

                <button onClick={() => addToFavorite(data.id)}
                type="button"
                className="note-btn">{data.favorite ? "★" : "☆"}</button>

                <button onClick={() => setEdit({...data, edit: true})}
                type="button"
                className="note-btn">✎</button>

                <button onClick={() => deleteNote(data.id)}
                type="button"
                className="note-btn">🗑</button>
            </div>
        </div>
    );
}

export default Note;