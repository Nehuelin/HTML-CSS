
    // JAVASCRIPT OPERATIONS 1: Toogle between destinations (in case of a stopover): remember to add flights ID to toogle
    // JavaScript to update destination
    function toggleDestination(flightId) {
        const destination1 = document.getElementById(`destination-${flightId}-1`);
        const destination2 = document.getElementById(`destination-${flightId}-2`);
  
        if (destination1.style.display === 'none') {
          // Show the first destination, hide the second destination
          destination1.style.display = 'inline';
          destination2.style.display = 'none';
        } else {
          // Show the second destination, hide the first destination
          destination1.style.display = 'none';
          destination2.style.display = 'inline';
        }
  
        // Toggle the 'show' class to trigger the opacity transition
        destination1.classList.toggle('show');
        destination2.classList.toggle('show');
      }
  
          // Call the toggleDestination function for each flight every 4 seconds
      setInterval(() => {
          toggleDestination('123');
          toggleDestination('456');
        // Add more flight IDs as needed
      }, 4000);
  
      // delayed (+30 min), lastcall --> RED, twinkling
      // closed, ask agent --> ORANGE
      // pre-boarding, boarding --> YELLOW
          // JavaScript to update flight status
      // JavaScript to update flight status manually
      function updateFlightStatus(flightId, status, newDepartureTime) {
        const statusElement = document.getElementById(`flight-status-${flightId}`);
        const departureTimeElement = document.getElementById(`departure-time-${flightId}`);
       
        statusElement.textContent = status;
        
        // Remove existing status class
        statusElement.classList.remove('status-yellow', 'status-orange', 'status-red');
  
        // Add appropriate status class based on the status value
      if (status === 'Pre-Boarding' || status === 'Boarding') {
          statusElement.classList.add('status-yellow');
          } else if (status === 'Closed' || status === 'Ask Agent') {
          statusElement.classList.add('status-orange');
          } else if (status === 'Canceled' || status == 'Last Call') {
          statusElement.classList.add('status-red');
          } else if (status === 'Delayed') {
          statusElement.classList.add('status-red');
    // Blinking effect for "Delayed" status
    setTimeout(() => {
        const blinkInterval = setInterval(() => {
          statusElement.style.visibility = (statusElement.style.visibility === 'hidden') ? 'visible' : 'hidden';
        }, 500);
        
        // Stop blinking and display new departure time
        setTimeout(() => {
          clearInterval(blinkInterval);
          statusElement.style.visibility = 'visible';
          departureTimeElement.textContent = newDepartureTime;
          
          // Continue blinking after displaying departure time
          setTimeout(() => {
            updateFlightStatus(flightId, status, newDepartureTime);
          }, 2000);
        }, 4000);
      }, 1000);
    }
  }




        


// Update flight status and departure time for Flight 123 (Delayed)

  updateFlightStatus('123', 'Delayed', '12:30 PM');


// Update flight status and departure time for Flight 456 (Delayed)

  updateFlightStatus('456', 'Delayed', '3:45 PM');

      

           
        