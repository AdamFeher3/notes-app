import { useState } from "react";
import FolderList from "./FolderList";

function Sidebar({
    setView,
    folders,
    saveFolder,
    deleteFolder
}) {

    const [newFolder, setNewFolder] = useState(false);
    const [folderName, setFolderName] = useState("");

    return (
        <aside className="sidebar">

            <div className="side">
                <div className="side-title">View</div>
                <div className="side-list">
                    
                    <button onClick={e => setView(e.target.value)}
                    value="all"
                    type="button"
                    className="side-btn">➤ All</button>

                    <button onClick={e => setView(e.target.value)}
                    value="favorites"
                    type="button"
                    className="side-btn">★ Favorites</button>
                </div>
            </div>

            <div className="side">
                <div className="side-title">Folders</div>
                <div className="side-list">

                    <button onClick={() => setNewFolder(!newFolder)}
                    type="button"
                    className="new-folder-btn">+ New Folder</button>

                    {newFolder && <div className="new-folder">

                        <input onChange={e => setFolderName(e.target.value)}
                        value={folderName}
                        placeholder="Enter folder name..."
                        type="text"
                        className="new-folder-name"/>

                        <div className="new-folder-actions">

                            <button onClick={() => {
                                if ( folderName.trim() === "" ) return;
                                saveFolder(folderName);
                                setNewFolder(false);
                                setFolderName("");
                            }}
                            type="button"
                            className="new-folder-action-btn">✓</button>

                            <button onClick={() => {
                                setNewFolder(false);
                                setFolderName("");
                            }}
                            type="button"
                            className="new-folder-action-btn">✗</button>
                        </div>
                    </div>}

                    <FolderList
                    folders={folders}
                    setView={setView}
                    deleteFolder={deleteFolder}
                    />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;