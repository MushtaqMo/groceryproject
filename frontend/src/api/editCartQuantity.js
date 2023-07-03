const API_URL = `http://localhost:4000`


export const EditCart = async (updatedQuantity) => {
    const response = await fetch(`${API_URL}/grocery/items/${product._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ numberSelected: updatedQuantity }),
    });
  
    const json = await response.json();
    return json;
  };
  