const API_URL = `http://localhost:4000`


export const editCart = async (item) => {
    const response = await fetch(`${API_URL}/grocery/items/${item._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ numberSelected: item.numberSelected }),
    });
  
    const json = await response.json();
    return json;
  };
  
  export default editCart;