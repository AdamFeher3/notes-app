import { useEffect, useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import useFolder from "./sidebar/useFolder";
import useNote from "./notes/useNote";
import NoteEditor from "./notes/NoteEditor";
import NoteList from "./notes/NoteList";
import { filterNotes } from "./util/noteHelper";

function App() {

    const [openNote, setOpenNote] = useState(false);
    const [search, setSearch] = useState("");
    const [view, setView] = useState("all");
    const [viewName, setViewName] = useState("all");

    const {
        folders,
        saveFolder,
        deleteFolder: removeFolder
    }
    = useFolder();

    const {
        notes,
        addToFavorite,
        deleteNote,
        saveNote,
        edit,
        setEdit
    }
    = useNote();

    useEffect(() => {

        const name = view !== "all" && view !== "favorites" ?
        folders.find(f => f.id === view )?.name :
        view;
        setViewName(name);
    }, [view]);

    function deleteFolder(id) {

        removeFolder(id);
        if ( view === id ) setView("all");
    }

    const filteredNotes = filterNotes(notes, search, view);

    return (
        <div className="body-container">

            <Header
            setOpenNote={setOpenNote}
            search={search}
            setSearch={setSearch}
            />

            <section className="layout">

                <Sidebar
                setView={setView}
                folders={folders}
                saveFolder={saveFolder}
                deleteFolder={deleteFolder}
                />

                <main className="notes-container">

                    {openNote &&
                    <NoteEditor
                    setOpenNote={setOpenNote}
                    edit={edit}
                    saveNote={saveNote}
                    folders={folders}
                    />}

                    {!openNote &&
                    <div className="current-view">
                        {viewName[0].toUpperCase() + viewName.slice(1)}
                    </div>
                    }

                    {!openNote &&
                    <NoteList
                    notes={filteredNotes}
                    addToFavorite={addToFavorite}
                    setEdit={data => {
                        setEdit(data);
                        setOpenNote(true);
                    }}
                    deleteNote={deleteNote}
                    />}
                </main>
            </section>
        </div>
    );
}

export default App;