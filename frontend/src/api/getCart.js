const API_URL = `http://localhost:4000`

export const GetCart = async () => {
    const response = await fetch(`${API_URL}/products/items/`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    const json = await response.json()
    return json

}

export default GetCart;