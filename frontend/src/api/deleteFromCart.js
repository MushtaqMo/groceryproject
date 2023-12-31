const API_URL = `http://localhost:4000`

export const deleteFromCart = async (product) => {
    const response = await fetch (`${API_URL}/grocery/items/${product._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'


        }})

        const json = await response.json()
        return json

}