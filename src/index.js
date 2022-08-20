import './css/styles.css';
import { fetchCountries } from './js-modules/fetchCountries';
import { refs } from './js-modules/referense';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {markupList, markupOneBox, resetHTML} from './js-modules/markup';
import showMessage from './js-modules/message'

const DEBOUNCE_DELAY = 300;








refs.inputField.addEventListener("input", debounce( (event) => {

    let name = "";
    name = event.target.value.trim();
    if (name === "") return
    // console.log( document.querySelector(".country-info"),)

fetchCountries(name).then((data) =>{
    if (data.length > 9) return Notify.info("Too many matches found. Please enter a more specific name.")
    else if (data.length > 1){ 
        resetHTML(refs.box)
        markupList(data, refs.list)
    }
    else if (data.length > 0) {
        resetHTML(refs.list)
        markupOneBox(data, refs.box)
    }

    console.log(data)

}
)

}, DEBOUNCE_DELAY))




 