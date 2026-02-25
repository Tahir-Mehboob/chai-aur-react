import { useState,useEffect } from "react";

function useCurrencyInfo(useCurrencyInfo) { //hooks start with "use" 
// and is a function 
// and it can use optional aruments in our case it doesn't need any optional arguments 

    const [data, setData] = useState({}) //state to store the data fetched from the api

let url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json'
        useEffect(() => {
            fetch(url)
            .then(res => res.json()) //fetching the data from the url and converting it to json format
            .then(res => setData(res[currency]))
            console.log(data)
        }, [currency]) //dependency array to re-run the useEffect when currency changes
        console.log(data)
        return data
}
export default useCurrencyInfo;

// part 1 how to create a custom hook completed

// custom hook to fetch currency information from an API
// it uses useState to store the fetched data also changes on UI
