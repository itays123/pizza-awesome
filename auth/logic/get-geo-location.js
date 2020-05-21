const fetch = require('node-fetch');

module.exports = async ({ city, street, number }) => {
    try {
        if (!isNaN(number)) number = number + '';
        const query = `${number}%20${street.replace(' ', '%20')}%20${city.replace(' ', '%20')}`;
        const url = `https://eu1.locationiq.com/v1/search.php?key=91436e4feed9dc&q=${query}&format=json`;
        const res = await fetch(url)
        const locations =  await res.json();
        const { lat, lon } = locations[0];
        return [lat, lon];
    } catch(err) {
        throw err;
    }
    
    
}