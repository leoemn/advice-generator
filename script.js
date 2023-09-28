document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    const fetchAdviceButton = document.getElementById('b');
    fetchAdvice();

    function fetchAdvice() {
        // Use the fetch API to get data from adviceslip.com
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())  // Parse the JSON from the response
            .then(data => {
                // Extract the advice from the data object and update the HTML
                const advice = data.slip.advice;
                const id = data.slip.id
                document.getElementById('advice').innerText = advice;
                document.getElementById('idn').innerText = id;
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching advice:', error);
            });
    }

    // Add a click event listener to the button
    fetchAdviceButton.addEventListener('click', function() {
        fetchAdvice();
    });
});
