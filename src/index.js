import './css/styles.css';
import { fetchCountries } from './js-modules/fetchCountries';
import { refs } from './js-modules/referense';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {markupList} from './js-modules/markup';
import showMessage from './js-modules/message'

const DEBOUNCE_DELAY = 300;








refs.inputField.addEventListener("input", debounce( (event) => {
    let name = "";
    name = event.target.value.trim();
    if (name === "") return

fetchCountries(name).then((data) =>{
    if (data.length > 9) return Notify.info("Too many matches found. Please enter a more specific name.")
    else if (data.length > 1) return markupList(data, refs.list)
    else {console.log(data)}
}
)

}, DEBOUNCE_DELAY))





 