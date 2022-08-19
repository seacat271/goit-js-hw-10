export {markupList}

function markupList (data, placeholder) {
    let markup = "";
    data.forEach( ({flags: {svg}, name}) => {
       markup += `<li><img width="200" src="${svg}" alt="flag country"><span>${name}</span></li>`
    });

    placeholder.innerHTML = markup;
};