import { useEffect, useState } from "react";
import { loadData, saveData } from "../util/Storage";
import getColor from "../util/NoteColor";

function useNote() {

    const [notes, setNotes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [edit, setEdit] = useState({});

    useEffect(() => {

        const data = loadData("notes");
        setNotes(data);
        setLoaded(true);
    }, []);

    useEffect(() => {

        if ( !loaded ) return;
        saveData("notes", notes);
    }, [notes]);

    function addToFavorite(id) {

        setNotes(prev => prev.map(n =>
            n.id === id ? { ...n, favorite: !n.favorite } : n
        ));
    }

    function deleteNote(id) {

        setNotes(prev => prev.filter(n =>
            n.id !== id
        ));
    }

    function saveNote(name, content, folderid) {

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