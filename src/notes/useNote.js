import { useEffect, useState } from "react";
import { loadData, saveData } from "../util/Storage";
import getColor from "../util/NoteColor";

function useNote() {

    const [notes, setNotes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [edit, setEdit] = useState({});

    // LOAD NOTES FROM LOCALSTORAGE
    useEffect(() => {

        const data = loadData("notes");
        setNotes(data);
        setLoaded(true);
    }, []);

    // SAVE NOTES TO LOCALSTORAGE
    useEffect(() => {

        if ( !loaded ) return;
        saveData("notes", notes);
    }, [notes]);

    // ADD OR REMOVE NOTE FROM FAVORITES
    function addToFavorite(id) {

        setNotes(prev => prev.map(n =>
            n.id === id ? { ...n, favorite: !n.favorite } : n
        ));
    }

    // DELETE NOTE
    const deleteNote = (id) =>
        setNotes(prev => prev.filter(n => n.id !== id));

    // SAVE NOTE
    function saveNote(name, content, folderid) {

        // SAVE EDITED NOTE
        if ( edit?.edit ) {

            setNotes(prev => prev.map(n =>
                n.id === edit.id ?
                {
                    ...n,
                    name: name,
                    content: content,
                    folder: folderid
                } : n
            ));
            setEdit({});
            return;
        }

        // CREATE AND SAVE NEW NOTE
        const note = {
            name: name,
            content: content,
            id: crypto.randomUUID(),
            favorite: false,
            folder: folderid,
            date: new Date().toLocaleDateString(),
            color: getColor()
        };
        setNotes(prev => [...prev, note]);
    }

    return {
        notes,
        addToFavorite,
        deleteNote,
        saveNote,
        edit,
        setEdit
    };
}

export default useNote;