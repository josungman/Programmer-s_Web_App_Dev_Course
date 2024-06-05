export const getPersonalInfo = async() => {
    try {
        // const response = await fetch("/web/src/data/new_data.json");
        const response = await fetch("../data/new_data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if(!localStorage.getItem("personalInfo")) {
            localStorage.setItem("personalInfo", JSON.stringify(data));
        }

        return localStorage.getItem("personalInfo")
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
}

export const getCardStatus = async() => {
    try {
        if(!localStorage.getItem("cardStatus")) {
            localStorage.setItem("cardStatus", JSON.stringify([]));
        }
        return localStorage.getItem("cardStatus")
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
}