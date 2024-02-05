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
 function getMapsApi(){
    const mapsUrl = 'https://google-api31.p.rapidapi.com/map';
    const mapsOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'cc6662c9a3msh28bb13fdd1e33c2p1bf432jsn2e8126b92b70',
            'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
        },
        body: JSON.stringify({
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
        })
    }
    

    try {
        const response =fetch(mapsUrl, mapsOptions);
        const data =response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
       
    try{
        const response = fetch(mapsUrl, mapsOptions);
        const data = response.json();
        const cityStates = data.response;
        
        if(cityStates.length > 1){
            multipleCityStates();
            setTimeout(() =>{
                removeMultipleCityState();}, 3000);
            } else {
                cityInformation(cityStates[0]);
            }
        } catch (error){
            console.error(error);
        }  

         function searchCity(){
            var userSearch = document.getElementById('search-input').value;
            var displayMessage = document.getElementById("display-error");
            var citySearch = document.getElementById("city-result");
            validateInput();
        }
    }
        function validateInput(){
        var userSearch=document.getElementById("search-input").value;
        var displayMessage=document.getElementById("display-error");
        if(userSearch.trim()===""){
    displayMessage.textContent="Sorry,please enter a valid city...";
     } else {
    displayMessage.textContent="";
        }
    }


        function cityInformation(cityStates){
            console.log("City:", cityStates.city);
            console.log("State:", cityStates.state);
        }

        function multipleCityStates(){
            var createCard =document.createElement('div')
            createCard.className = 'multiple-states';
            createCard.textContent = 'City found in multiple states please specify the state';
            createCard.style.backgroundColor = 'red';
            createCard.style.color = 'white';
            createCard.style.zIndex = 1;
            createCard.style.position='fixed';
            createCard.style.textAlign = 'center';

        }
        
        function removeMultipleCityState(){

        }

