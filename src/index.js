import './css/styles.css';
import fetchCountries from './js-modules/fetchCountries';
import refs from './js-modules/referense';
import debounce from 'lodash.debounce';
import {markupList, markupOneBox, resetHTML, resetAllHTML} from './js-modules/markup';
import {showInfoMessage} from './js-modules/message'

const DEBOUNCE_DELAY = 300;

refs.inputField.addEventListener("input", debounce(onInputChange, DEBOUNCE_DELAY))

function onInputChange (event) {
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
}

refs.list.addEventListener("click", onClickCountry
)

function onClickCountry(event) {
    console.log(event.target.nodeName)
    if(event.target.nodeName !== "SPAN" && event.target.nodeName !== "IMG" && event.target.nodeName !== "LI") return
    fetchCountries(event.target.closest("li").dataset.item).then((data) => {
        resetHTML(refs.list)
        markupOneBox(data)
        refs.inputField.value = event.target.closest("li").dataset.item;
        refs.inputField.focus()
}).catch(err => console.log(err))
}



 
 
 
 
 
 

 
 
 
 

 
 
 
