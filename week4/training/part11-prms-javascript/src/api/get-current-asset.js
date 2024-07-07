import axios from "axios"


/**  
 * @return {price : number}
 */
export const getCurrentAsset = async () => {
    
        const { data } = await axios.get('http://localhost:30002/current-asset');
        console.log(data);
        return data;
    
    
}
