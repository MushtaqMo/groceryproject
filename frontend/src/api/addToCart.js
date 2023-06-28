const API_URL = `http://localhost:4000`

export const addToCart = async (product) => {
    const response = await fetch (`${API_URL}/products/items`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'content-type': 'application/json'


        }})

        const json = await response.json()
        return json

}