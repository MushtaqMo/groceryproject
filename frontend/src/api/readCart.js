const API_URL = `http://localhost:4000`

export const ReadCart = async () => {

     let response = await fetch(`${API_URL}/grocery/items`)
     // convert to json()
     let data = await response.json()
     // return the data collect from fetch 
     console.log(data)
     return data
<<<<<<< HEAD
}

export default ReadCart
=======

     console.log(data)
}


>>>>>>> Main
