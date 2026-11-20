import { useEffect, useState } from "react";

function NoteEditor({
    setOpenNote,
    edit,
    saveNote,
    folders
}) {

    const [noteName, setNoteName] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [showFolder, setShowFolder] = useState(false);
    const [folderName, setFolderName] = useState(null);
    const [folderId, setFolderId] = useState(null);

    useEffect(() => {

        if ( edit?.edit ) {
            setNoteName(edit.name);
            setNoteContent(edit.content);
        }
        else {
            setNoteName("");
            setNoteContent("");
        }
    }, [edit]);

    useEffect(() => {

        // FIND FOLDER NAME BY FOLDER ID
        setFolderName(folders.find(f => f.id === folderId)?.name || null);
    }, [folderId]);

    return (
        <div className="current-note">

            {/** NOTE NAME INPUT */}
            <input onChange={e => setNoteName(e.target.value)}
            value={noteName}
            placeholder="Enter name..."
            type="text"
            className="current-note-name"/>

            {/** NOTE CONTENT INPUT */}
            <textarea onChange={e => setNoteContent(e.target.value)}
            value={noteContent}
            placeholder="Type..."
            className="current-note-content"></textarea>

            {/** FOLDER SELECTION */}
            <div className="select-folder">
                <div className="select-folder-actions">

                    <button onClick={() => setShowFolder(!showFolder)}
                    type="button"
                    className="open-folders-btn">
                        {folderName === null ? "📁 Select Folder" : "📁" + folderName}
                    </button>

                    {/** REMOVE FOLDER ASSIGNED TO NOTE */}
                    <button onClick={() => {
                        setShowFolder(false);
                        setFolderName(null);
                        setFolderId(null);
                    }}
                    type="button"
                    className="cancel-folder-btn">X</button>
                </div>

                {/** AVAILABLE FOLDERS LIST */}
                {showFolder &&
                <div className="select-folder-list">

                    {folders.map(f => {

                        return <button onClick={() => {
                            setFolderId(f.id);
                            setShowFolder(false);
                        }}
                        key={f.id}
                        type="button"
                        className="select-folder-btn">{f.name}</button>
                    })}
                </div>}
            </div>

            <div className="current-note-actions">

                {/** SAVE NEW OR EDITED NOTE */}
                <button onClick={() => {
                    if ( noteName.trim() === "" ) return;
                    saveNote(noteName, noteContent, folderId);
                    setOpenNote(false);
                }}
                style={{ cursor: noteName.trim() === "" ? "not-allowed" : "pointer" }}
                type="button"
                className="current-note-btn">SAVE</button>

                {/** CANCEL EDITS AND CLOSE NOTE */}
                <button onClick={() => setOpenNote(false)}
                type="button"
                className="current-note-btn">CANCEL</button>
            </div>
        </div>
    );
}

export default NoteEditor;