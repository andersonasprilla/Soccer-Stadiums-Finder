var input;
var mapsKey = "AIzaSyBgJ5N-Ae3YcSnk_RYvBqtrq9l9f_hZMZI"
var mapSrc;

$(document).ready(function () {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfcdfd8660mshcf1e95e5a80388ep1455edjsn19cece7560ca',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    $('#search-form').submit(submitHandler);

    function getFootballAPI() {
        const url = 'https://api-football-v1.p.rapidapi.com/v3/venues?country=Usa';

        // Set input before calling the API
        input = $('#search-input').val();

        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                displayCard(data);
            });

    }

    function submitHandler(event) {
        event.preventDefault();
        getFootballAPI(); // Call getFootballAPI when the form is submitted
    }

    function createCard() {
        // Create card element
        var card = $('<div>').addClass('card').css('width', '18rem');

        // Create image element
        var img = $('<img>').addClass('card-img-top').attr('alt', 'Stadium Image').css({
            'height': '200px', // Set the desired height for the image
            'object-fit': 'cover' // Ensure the image covers the specified dimensions
        });

        // Create card body element
        var cardBody = $('<div>').addClass('card-body');

        // Create card title element
        var title = $('<h5>').addClass('card-title text-center');

        // Create list element
        var ulList = $('<ul>').addClass('list-group list-group-light list-group-small');
        var olAddress = $('<ol>').addClass('list-group-item address');
        var olCapacity = $('<ol>').addClass('list-group-item capacity');
        var olCity = $('<ol>').addClass('list-group-item city');
        var olSurface = $('<ol>').addClass('list-group-item surface');

        ulList.append(olAddress);
        ulList.append(olCapacity);
        ulList.append(olCity);
        ulList.append(olSurface);

        // Append elements to card body
        cardBody.append(title);
        cardBody.append(ulList);

        // Append elements to card
        card.append(img);
        card.append(cardBody);

        // Return the created card element
        return card;
    }


    function displayCard(data) {
        // Clear existing cards before displaying new ones
        $(".display-stadium-card").empty();

        if (data && data.response) {
            for (var i = 0; i < data.response.length; i++) {
                var city = data.response[i].city 
                if (city.toLowerCase().includes(input)) {
                    var stadiumData = createCard();
                    var urlLocation = data.response[i].name.replace(/ /g, '+')

                    if (urlLocation.includes('Stadium')) {
                        mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${urlLocation},CA&zoom=17&size=400x400&key=${mapsKey}&maptype=hybrid`
                    } else {
                        mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${urlLocation + '+Stadium'},CA&zoom=17&size=400x400&key=${mapsKey}&maptype=hybrid`
                    }
                    $('.card-img-top', stadiumData).attr('src', mapSrc);
                    $('.card-title', stadiumData).text(data.response[i].name);
                    $('.address', stadiumData).text('Address: ' + data.response[i].address);
                    $('.capacity', stadiumData).text('Capacity: ' + data.response[i].capacity + ' Espectators');
                    $('.city', stadiumData).text('City: ' + city); // Use the sanitized city variable
                    $('.surface', stadiumData).text('Surface: ' + data.response[i].surface);

                    $(".display-stadium-card").append(stadiumData);
                    }
                }
            }
        }

    })
