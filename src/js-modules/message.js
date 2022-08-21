import Notiflix from 'notiflix';

Notiflix.Notify.init({
    width: '700px',
    fontSize: '23px',
    borderRadius: '10px',
    });

export {showErrorText, showFailMessage, showInfoMessage}
     
    function showFailMessage() {
        const noCountry = "Oops, there is no country with that name";
        return Notiflix.Notify.failure(noCountry)
     
    }
    
    function showInfoMessage() {
        const manyMatches = "Too many matches found. Please enter a more specific name.";
        return Notiflix.Notify.info(manyMatches)
    }
    
    function showErrorText(text) {
       return Notiflix.Notify.failure(text)
    }

