import { useEffect, useState } from "react";
import { loadData, saveData } from "../util/Storage";

function useFolder() {

    const [folders, setFolders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const data = loadData("folders");
        setFolders(data);
        setLoaded(true);
    }, []);

    useEffect(() => {
        if ( !loaded ) return;
        saveData("folders", folders);
    }, [folders]);

    function saveFolder(name) {

        const folder = {
            name: name,
            id: crypto.randomUUID(),
            date: new Date().toLocaleDateString()
        };
        setFolders(prev => [...prev, folder]);
    }

    function deleteFolder(id) {

        setFolders(prev => prev.filter(f =>
            f.id !== id
        ));
    }

    return {
        folders,
        saveFolder,
        deleteFolder
    };
}

export default useFolder;