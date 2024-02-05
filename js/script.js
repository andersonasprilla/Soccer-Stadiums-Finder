// Declare variables
var input;
var mapsKey = "AIzaSyBgJ5N-Ae3YcSnk_RYvBqtrq9l9f_hZMZI"
var mapSrc;

// Execute code when the document is ready
$(document).ready(function () {

    // Define options for making API requests
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfcdfd8660mshcf1e95e5a80388ep1455edjsn19cece7560ca',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    // Attach a submit handler function to the form
    $('#search-form').submit(submitHandler);

    // Function to handle form submission
    function submitHandler(event) {
        event.preventDefault();
        getFootballAPI(); // Call getFootballAPI when the form is submitted
    }

    // Function to make API request to retrieve football data
    function getFootballAPI() {
        // Set input before calling the API
        input = $('#search-input').val();

        // Check if the user has entered anything
        if (!input) {
            displayCityNotFoundError('Input cannot be blank');
            return;
        }

        const url = 'https://api-football-v1.p.rapidapi.com/v3/venues?country=Usa';

        // Save the input to local storage
        saveToLocalStorage(input);

        // Fetch data from the API
        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data && data.response && data.response.length > 0) {
                    displayCard(data);
                } else {
                    displayCityNotFoundError('Not a valid city');
                }
            });

    }

    // Function to create a card element
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


    // Function to display the card with stadium information
    function displayCard(data) {
        // Clear existing cards before displaying new ones
        $(".display-stadium-card").empty();

        if (data && data.response) {
            for (var i = 0; i < data.response.length; i++) {
                var city = data.response[i].city
                if (city.toLowerCase().includes(input.toLowerCase())) {

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

    // Function to display an error card when a city is not found
    function displayCityNotFoundError(error) {
        // Clear existing cards before displaying the error
        $(".display-stadium-card").empty();

        // Create a city not found error card element
        var errorCard = $('<div>').addClass('card border-danger mb-3').css({
            'max-width': '18rem',
            'margin': 'auto',
            'margin-top': '20px',
            'border-color': '#dc3545'
        });

        var cardHeader = $('<div>').addClass('card-header bg-danger text-white').text('Error');
        var cardBody = $('<div>').addClass('card-body text-danger');
        var errorMessage = $('<p>').addClass('card-text text-center').text(error);

        // Append elements to the city not found error card
        cardBody.append(errorMessage);
        errorCard.append(cardHeader);
        errorCard.append(cardBody);

        // Append the city not found error card to the display container
        $(".display-stadium-card").append(errorCard);

        // Remove the error message after 3 seconds
        setTimeout(function () {
            errorCard.remove();
        }, 3000);
    }

    // Handle click event for Venues History link
    $('#venues-history-link').click(function () {
        // Load and show the venues history when the link is clicked
        loadVenuesHistory();
    });


    // Function to load venues history from local storage
    function loadVenuesHistory() {
        // Load venues history from local storage
        var venuesHistory = JSON.parse(localStorage.getItem('venuesHistory')) || [];

        // Create buttons for venues history
        createHistoryButtons(venuesHistory);
    }

    // Function to save a city to local storage
    function saveToLocalStorage(city) {
        // Save to local storage
        var venuesHistory = JSON.parse(localStorage.getItem('venuesHistory')) || [];

        // Avoid duplicate entries
        if (!venuesHistory.includes(city)) {
            venuesHistory.push(city);
            localStorage.setItem('venuesHistory', JSON.stringify(venuesHistory));

            // Update buttons for venues history
            createHistoryButtons(venuesHistory);
        }
    }

    // Function to create buttons for venues history
    function createHistoryButtons(venuesHistory) {
        // Clear existing history buttons
        $('#venues-history').empty();

        // Create buttons for each city in venues history
        venuesHistory.forEach(function (city) {
            var historyButton = $('<button>').addClass('btn btn-outline-secondary me-2').text(city);
            historyButton.click(function () {
                // Set the input to the clicked city and trigger form submission
                $('#search-input').val(city);
                getFootballAPI();
            });

            $('#venues-history').append(historyButton);
        });

        // Show the history buttons
        $('#venues-history').show();
    }

})






