import { useState } from "react"
import "./checkout.css"

const ChooseDelivery = () => {
    
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    let tomorrowDay = tomorrow.getDate() <10?`0${tomorrow.getDate()}`:`${tomorrow.getDate}` 
    let tomorrowMonth = tomorrow.getMonth() + 1 <10?`0${tomorrow.getMonth() + 1}`:`${tomorrow.getMonth() + 1}`
    let tomorrowYear = tomorrow.getFullYear()
    const dayAfterTomorrow = new Date(today)
    dayAfterTomorrow.setDate(today.getDate() + 2)
    let dayAfterTomorrowDay = dayAfterTomorrow.getDate() <10?`0${dayAfterTomorrow.getDate()}`:`${dayAfterTomorrow.getDate}`
    let dayAfterTomorrowMonth = dayAfterTomorrow.getMonth() + 1 <10?`0${dayAfterTomorrow.getMonth() + 1}`:`${dayAfterTomorrow.getMonth() + 1}`
    let dayAfterTomorrowYear = dayAfterTomorrow.getFullYear()
    const threeDaysAway = new Date(today)
    threeDaysAway.setDate(today.getDate() + 3)
    let threeDaysDay = threeDaysAway.getDate() <10?`0${threeDaysAway.getDate()}`:`${threeDaysAway.getDate}` 
    let threeDaysMonth = threeDaysAway.getMonth() + 1 <10?`0${threeDaysAway.getMonth() + 1}`:`${threeDaysAway.getMonth() + 1}`
    let threeDaysYear = threeDaysAway.getFullYear()

    const [delivery, setDelivery] = useState("11")

    function handleSubmit(event){
        event.preventDefault()
        console.log(tomorrowDay)
        let chosenDay = ""
        let chosenMonth = ""
        let chosenYear = ""
        let time = ""
        if (delivery[0] === "1") {
            chosenDay = tomorrowDay
            chosenMonth = tomorrowMonth
            chosenYear = tomorrowYear
        } else if (delivery[0] === "2") {
            chosenDay = dayAfterTomorrowDay
            chosenMonth = dayAfterTomorrowMonth
            chosenYear = dayAfterTomorrowYear
        } else if (delivery[0] === "3") {
            chosenDay = threeDaysDay
            chosenMonth = threeDaysMonth
            chosenYear = threeDaysYear
        }
        if (delivery[1] === "1"){
            time = "08:00 - 10:00"
        } else if (delivery[1] == "2") {
            time = "10:00 - 12:00"
        } else if (delivery[1] == "3"){
            time = "13:00 - 15:00"
        } else if (delivery[1] == "4") {
            time = "15:00 - 17:00"
        } else {
            time = "17:00 - 19:00"
        }
        alert(`Thank you for your order. Please be ready to accept your delivery on ${chosenDay}/${chosenMonth}/${chosenYear} between the hours of ${time}`)
    }

    const onOptionChange = e => {
        setDelivery(e.target.value)
        console.log(delivery)
      }

    return (
        <div className = "mainContainer">
            <div>
                <h2 className = "heading">Choose your delivery slot:</h2>
            </div>
            <div className = "checkoutForm">
                <form onSubmit = {handleSubmit}>
                <div className = "allDaysContainer">
                    <div className = "dayContainer">
                        <div className = "headerContainer">
                            <h3>{tomorrowDay}/{tomorrowMonth}/{tomorrowYear}</h3>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "11"
                            checked={delivery === "11"}
                            onChange={onOptionChange}
                            />
                            08:00 - 10:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "12"
                            checked={delivery === "12"}
                            onChange={onOptionChange}
                            />
                            10:00 - 12:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "13"
                            checked={delivery === "13"}
                            onChange={onOptionChange}
                            />
                            13:00 - 15:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "14"
                            checked={delivery === "14"}
                            onChange={onOptionChange}
                            />
                            15:00 - 17:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "15"
                            checked={delivery === "15"}
                            onChange={onOptionChange}
                            />
                            17:00 - 19:00</label>
                        </div>
                    </div>
                    <div className = "dayContainer">
                        <div>
                            <h3 className = "headerContainer">{dayAfterTomorrowDay}/{dayAfterTomorrowMonth}/{dayAfterTomorrowYear}</h3>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "21"
                            checked={delivery === "21"}
                            onChange={onOptionChange}
                            />
                            08:00 - 10:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "22"
                            checked={delivery === "22"}
                            onChange={onOptionChange}
                            />
                            10:00 - 12:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "23"
                            checked={delivery === "23"}
                            onChange={onOptionChange}
                            />
                            13:00 - 15:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "24"
                            checked={delivery === "24"}
                            onChange={onOptionChange}
                            />
                            15:00 - 17:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "25"
                            checked={delivery === "25"}
                            onChange={onOptionChange}
                            />
                            17:00 - 19:00</label>
                        </div>
                    </div>
                    <div className = "dayContainer"> 
                        <div className = "headerContainer">
                            <h3>{threeDaysDay}/{threeDaysMonth}/{threeDaysYear}</h3>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "31"
                            checked={delivery === "31"}
                            onChange={onOptionChange}
                            />
                            08:00 - 10:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "32"
                            checked={delivery === "32"}
                            onChange={onOptionChange}
                            />
                            10:00 - 12:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "33"
                            checked={delivery === "33"}
                            onChange={onOptionChange}
                            />
                            13:00 - 15:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "34"
                            checked={delivery === "34"}
                            onChange={onOptionChange}
                            />
                            15:00 - 17:00</label>
                        </div>
                        <div>
                            <label>
                            <input className = "radioInput"
                            type = "radio"
                            name = "delivery"
                            value = "35"
                            checked={delivery === "35"}
                            onChange={onOptionChange}
                            />
                            17:00 - 19:00</label>
                        </div>
                    </div>
                </div>
                <div className = "buttonContainer">
                    <button className = "submitButton" type = "submit">Submit</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ChooseDelivery;