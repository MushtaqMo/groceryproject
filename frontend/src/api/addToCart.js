const API_URL = `http://localhost:4000`

export const AddToCart = async (product) => {
    const response = await fetch (`${API_URL}/grocery/items`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            "Content-type": "application/json"


        }})

        const json = await response.json()
        return json

}

export default AddToCart;