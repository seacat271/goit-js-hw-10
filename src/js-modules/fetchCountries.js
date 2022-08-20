import { resetAllHTML } from "./markup";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export {fetchCountries};


const BASE_URL = "https://restcountries.com/v2/name/"
const options = "?fields=name,capital,population,flags,languages"

function fetchCountries (chars) {
    return fetch(`${BASE_URL}${chars}${options}`)
    .then(response => {
        if (response.ok) return response.json();
        if(response.status === 404) {
            return response.json().then(value => {
 
                throw new Error(value.message)
            })

        }
 
    })
    .catch(({message}) => {

        resetAllHTML()
        if (message == "Not Found") return Notify.failure("Oops, there is no country with that name")
        else return Notify.failure(`${message}`)
    })
 }

