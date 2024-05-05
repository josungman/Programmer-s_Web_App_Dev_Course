import axios from "axios"

/**
 * @returns 
 * {
 *  id: number,
 *  price : number,
 *  category : string,
 *  fundsAtTheTime : number,
 *  description : string,
 *  createAt : string,
 *  }
 */

export const getConsumptionDetails = async () => {
    const {data} = await axios.get('http://localhost:3002/consumption-details')
    console.log(data);
    return data
};
