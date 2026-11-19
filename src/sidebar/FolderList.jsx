import Folder from "./Folder";

function FolderList({
    folders,
    setView,
    deleteFolder
}) {

    return (
        <div className="folder-list">

            {folders.map(f => {

                return <Folder
                key={f.id}
                data={f}
                setView={setView}
                deleteFolder={deleteFolder}
                />
            })}
        </div>
    );
}

export default FolderList;