import refs from "./referense";

export {markupList, markupOneBox, resetHTML, resetAllHTML}

function markupList (data) {
    let markup = "";
    data.forEach( ({flags: {svg}, name}) => {
       markup += `<li class="country__item" data-item="${name}"><img width="150" src="${svg}" alt="flag country"><span class="country__text">${name}</span></button></li>`
    });
    refs.list.innerHTML = markup;
};

function markupOneBox ([data]) {
    const {flags: {svg}, name, population, capital, languages} = data
    let languagesList = [];
    languages.forEach(({name}) => languagesList.push(name))
    languagesList = languagesList.join(", ");
    const markup = `<img src="${svg}" width="700" alt="flag country"><div class="container"><h1 class="title">${name}</h1><ul><li><span class="characteristic">Capital:   </span>${capital}</li><li><span class="characteristic">Population:   </span>${population}</li><li><span class="characteristic">Languages:   </span>${languagesList}</li></ul></div>`;
    refs.box.classList.add("country-info--margin")
    refs.box.innerHTML = markup;
}

function resetHTML(endpoint) {
    endpoint.innerHTML = ""
    if(endpoint.classList.contains("country-info--margin")) {
        endpoint.classList.remove("country-info--margin")
    }
}

function resetAllHTML() {
   refs.list.innerHTML = "";
   refs.box.innerHTML = "";
   if(refs.box.classList.contains("country-info--margin")) {
    refs.box.classList.remove("country-info--margin")
}
}

