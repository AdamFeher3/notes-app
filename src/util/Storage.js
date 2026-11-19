function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

function loadData(name) {

    try {
        const data = localStorage.getItem(name);
        return data ? JSON.parse(data) : [];
    }
    catch(error) {
        console.error("Error", error);
        return [];
    }
}

export {
    saveData,
    loadData
};