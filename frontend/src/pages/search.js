import {useState} from "react"
import stock from '../availableStock'

const search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search..."/>
            {stock.map((value, key) => {
                return(
                    <div>
                        <p>{value.name}</p>
                        <p>{value.price}</p>
                        </div>
                       )
                })}

            </div>
         )
}

export default search
























// const getFilteredItems = (search, items) => {
//     if (!search) {
//         return items
//     }
//     return items.filter(stock=> stock.name.includes(search) )
// }

// export default function search() {
//     const [search, setSearch] = useState('')

//     const {stock} = availableStock
//     const {items} = stock

//     const filteredItems = getFilteredItems(search,items)



//     return(
//         <div>
//             <label>search</label>
//             <input type="text" onChange={e => setSearch(e.target.value)}/>
//             <ul>
//                 {filteredItems.map(value => <h1 key={value.name}>(value.name) {value.price}(value.price) {value.category}(value.category)</h1>)}
//                 </ul>

//             </div>

//     )
// }