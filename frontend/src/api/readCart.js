const API_URL = `http://localhost:4000`

export const readCart = async () => {

     let response = await fetch(`${API_URL}/products/items`)
     // convert to json()
     let data = await response.json()
     // return the data collect from fetch 
     return data
}