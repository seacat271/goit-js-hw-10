
export {fetchCountries};

const BASE_URL = "https://restcountries.com/v2/name/"

// const searchParams = new URLSearchParams ({
// fields: [name, capital, population, flags, languages]
// })
function fetchCountries (chars) {
     return fetch(`${BASE_URL}${chars}?fields=name,capital,population,flags,languages`)
    .then(response => {
        // if(response.status === 404)
        return response.json()
    })
    .catch(err => console.log(err)) 
 }

//  https://restcountries.com/v2/{service}?fields={name},{capital},{population}

//  https://restcountries.com/v2/name/{name}