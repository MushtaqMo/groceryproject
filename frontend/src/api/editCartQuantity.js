const API_URL = `http://localhost:4000`


export const editCart = async (updatedQuantity) => {
    const response = await fetch(`${API_URL}/products/items/`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ numberSelected: updatedQuantity }),
    });
  
    const json = await response.json();
    return json;
  };
  