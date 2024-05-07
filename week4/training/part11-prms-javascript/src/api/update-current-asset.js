import axios from "axios"

export const updateCurrentAsset = async (value) => {
    await axios.post('http://localhost:30002/current-asset', {
        price : value,
    });
}