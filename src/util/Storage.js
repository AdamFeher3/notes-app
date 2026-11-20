// SAVE DATA TO LOCALSTORAGE
const saveData = (name, data) =>
    localStorage.setItem(name, JSON.stringify(data));

// LOAD DATA FROM LOCALSTORAGE
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