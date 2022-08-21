import { resetAllHTML } from "./markup";
import {showErrorText, showFailMessage} from './message';



const BASE_URL = "https://restcountries.com/v2/name/"
const options = "?fields=name,capital,population,flags,languages" //Чи можливо/варто зробити окремий об'єкт налаштувань?

export default function fetchCountries (name) {
    return fetch(`${BASE_URL}${name}${options}`)
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
        if (message == "Not Found") return showFailMessage()
        else return showErrorText(`${message}`)
    })
 }

