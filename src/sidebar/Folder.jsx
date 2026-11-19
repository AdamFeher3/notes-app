function Folder({
    data,
    setView,
    deleteFolder
}) {

    return (
        <div className="folder">

            <span>📁</span>
            <button onClick={() => setView(data.id)}
            type="button"
            className="folder-name">{data.name}</button>

            <div className="folder-action">

                <button onClick={() => deleteFolder(data.id)}
                type="button"
                className="delete-folder-btn">🗑</button>
            </div>
        </div>
    );
}

export default Folder;