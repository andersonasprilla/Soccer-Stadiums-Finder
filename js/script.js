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