import { refs } from "./referense";

export {markupList, markupOneBox, resetHTML, resetAllHTML}

function markupList (data, placeholder) {
    let markup = "";
    data.forEach( ({flags: {svg}, name}) => {
       markup += `<li><img width="200" src="${svg}" alt="flag country"><span>${name}</span></li>`
    });

    placeholder.innerHTML = markup;
};

function markupOneBox ([data], placeholder) {
    const {flags: {svg}, name, population, capital, languages} = data
    let languagesList = [];
    languages.forEach(({name}) => languagesList.push(name))
    languagesList = languagesList.join(", ");
    const markup = `<div><img src="${svg}" width="100"><h1 class="title">${name}</h1><ul><li><span class="characteristic">Capital:</span>${capital}</li><li><span class="characteristic">Population:</span>${population}</li><li><span class="characteristic">Languages:</span>${languagesList}</li></ul></div>`;
    
    placeholder.innerHTML = markup;
}

function resetHTML(endpoint) {
    endpoint.innerHTML = ""
}

function resetAllHTML() {
   refs.list.innerHTML = "";
   refs.box.innerHTML = "";
}