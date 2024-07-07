import config from './config.js'

const { API_ENDPOINT, REQUEST_ERROR } = config;

const request = async (url) => {
  try {
    const result = await fetch(url,{method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }});
    if (result.status === 200){
      return result.json()
    } else {
      throw REQUEST_ERROR[result.status]
    }
    
  } catch (error){
    //alert(error)
    return { data: null }
  }
}

const api = {
  fetchBreadcrumbRoot: () => {
    return request(`${API_ENDPOINT}`)
  },
  fetchBreadcrumbNodeId: (nodeid) => {
    return request(`${API_ENDPOINT}/${nodeid}`)
  },
  fetchRandomCats: () => {
    return request(`https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/random50`)
  },
  
};


export default api