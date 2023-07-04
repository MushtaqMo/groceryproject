import {useState} from "react"
import stock from '../availableStock'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className="search">
            <input 
            type="text"
             placeholder="Search..."
              onChange={e => {
                setSearchTerm(e.target.value);
                }}
                />
            {stock.filter((val)=>{
                if (searchTerm =="") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((value, key) => {
                return(
                    <div className="user" key={key}>
                        <p>{value.name}</p>
                        <p>{value.price}</p>
                        </div>
                       )
                })}

            </div>
                   )
}

export default Search