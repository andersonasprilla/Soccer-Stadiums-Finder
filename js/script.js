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

    const link = 'https://google-api31.p.rapidapi.com/map';
    const process = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'cc6662c9a3msh28bb13fdd1e33c2p1bf432jsn2e8126b92b70',
            'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        body: {
            text: 'white house',
            place: 'washington DC',
            street: '',
            city: '',
            country: '',
            state: '',
            postalcode: '',
            latitude: '',
            longitude: '',
            radius: ''
        }
    };
    
    try {
        const response = await fetch(link, process);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    } 
    const apiKey='cc6662c9a3msh28bb13fdd1e33c2p1bf432jsn2e8126b92b70';
    const cityUrl='https://google-api31.p.rapidapi.com/map';
        
        function validateInput(){
            var userSearch=document.getElementById("search-input").value;
            var displayMessage=document.getElementById("display-error");

            if(userSearch.trim()===""){
        displayMessage.textContent="Sorry,please enter a valid city...";
         } else {
        displayMessage.textContent="";
            }
        }
        async function searchCity(){
            var userSearch = document.getElementById('search-input').value;
            var displayMessage = document.getElementById("city-result")
        }

