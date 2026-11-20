import { useEffect, useState } from "react";
import { loadData, saveData } from "../util/Storage";

function useFolder() {

    const [folders, setFolders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // LOAD FOLDERS FROM LOCALSTORAGE
    useEffect(() => {

        const data = loadData("folders");
        setFolders(data);
        setLoaded(true);
    }, []);

    // SAVE FOLDERS TO LOCALSTORAGE
    useEffect(() => {

        if ( !loaded ) return;
        saveData("folders", folders);
    }, [folders]);

    // SAVE NEW FOLDER
    function saveFolder(name) {
        
        const folder = {
            name: name,
            id: crypto.randomUUID(),
            date: new Date().toLocaleDateString()
        };
        setFolders(prev => [...prev, folder]);
    }

    // DELETE FOLDER
    const deleteFolder = (id) =>
        setFolders(prev => prev.filter(f => f.id !== id));

    return {
        folders,
        saveFolder,
        deleteFolder
    };
}

export default useFolder;