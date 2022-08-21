import './css/styles.css';
import fetchCountries from './js-modules/fetchCountries';
import refs from './js-modules/referense';
import debounce from 'lodash.debounce';
import {markupList, markupOneBox, resetHTML, resetAllHTML} from './js-modules/markup';
import {showInfoMessage} from './js-modules/message'

const DEBOUNCE_DELAY = 300;

refs.inputField.addEventListener("input", debounce( (event) => {

    const chars = event.target.value.trim();
    if (chars === "") {
        resetAllHTML()
        return}

fetchCountries(chars).then((data) =>{
    if (data.length > 9) {
        resetAllHTML()
        showInfoMessage()
    } 
    else if (data.length > 1){ 
        resetHTML(refs.box)
        markupList(data)
    }
    else if (data.length > 0) {
        resetHTML(refs.list)
        markupOneBox(data)
    } 
})
.catch(err => console.log(err))

}, DEBOUNCE_DELAY))




 
 
 
 
 
 

 
 
 
 

 
 
 
