const url = 'https://api-football-v1.p.rapidapi.com/v3/venues?country=Usa';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfcdfd8660mshcf1e95e5a80388ep1455edjsn19cece7560ca',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};
fetch(url, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);    
    })

    const url = 'https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=164%20Townsend%20St.%2C%20San%20Francisco%2C%20CA&language=en';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cc6662c9a3msh28bb13fdd1e33c2p1bf432jsn2e8126b92b70',
        'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
    }
};