function filterNotes(notes, search, view) {

    const query = search.trim().toLowerCase();

    return notes.filter(n => {

        const getSearch =
        n.name.toLowerCase().includes(query) ||
        n.content.toLowerCase().includes(query);

        const getView = view !== "favorites" || n.favorite;

        const getFolder = view === "all" || view === "favorites" || n.folder === view;

        return getSearch && getView && getFolder;
    });
}

export {
    filterNotes
};