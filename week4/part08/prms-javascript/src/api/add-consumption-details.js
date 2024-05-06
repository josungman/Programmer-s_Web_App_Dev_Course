import axios from "axios"

/**
 * @parms 
 * {
 *  id: number,
 *  price : number,
 *  category : string,
 *  fundsAtTheTime : number,
 *  description : string,
 *  createAt : string,
 *  }
 */

export const addConsumptionDetail = async (body) => {
    const {data} = await axios.post('http://localhost:3002/consumption-details',body)
    console.log(data);
    return data
};
