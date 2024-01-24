    // Set current date
    var currentDate = new Date();
    var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);

    // Set local time
    setInterval(function() {
      var currentTime = new Date();
      var hours = currentTime.getHours().toString().padStart(2, '0'); // Add leading zero if necessary
      var minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Add leading zero if necessary
      document.getElementById('local-time').textContent = hours + ':' + minutes;
    }, 1000);
    
    // Get the flight status element
    var flightStatus = document.getElementById('status-text');
    var backgroundColor = document.getElementById('status-cell');

    // Check the value of the ID and apply styles accordingly
    if (flightStatus.textContent === 'CERRADO') {
      backgroundColor.classList.add('delayed');
    } else if (flightStatus.textContent === 'EN HORARIO') {
      backgroundColor.classList.add('on-time');
    } else if (flightStatus.textContent === 'DEMORADO') {
      backgroundColor.classList.add('delayed');
    } else if (flightStatus.textContent === 'EMBARQUE') {
    backgroundColor.classList.add('boarding');
    } else if (flightStatus.textContent === 'PRE-EMBARQUE') {
    backgroundColor.classList.add('boarding');
    }

    var statusText = document.getElementById('status-text');

    function updateText() {
      if (statusText.textContent === 'EMBARQUE') {
        statusText.textContent = 'BOARDING';
      } else if (statusText.textContent === 'PRE-EMBARQUE') {
        statusText.textContent = 'PRE-BOARDING'
      } else if (statusText.textContent === 'CERRADO') {
        statusText.textContent = 'CLOSED'
      } else if (statusText.textContent === 'ULTIMO AVISO') {
        statusText.textContent = 'LAST CALL'
      } else if (statusText.textContent === 'CONSULTE CIA') {
        statusText.textContent = 'ASK AGENT'
      } else if (statusText.textContent === 'DEMORADO') {
        statusText.textContent = 'DELAYED'
      } else if (statusText.textContent === 'EN HORARIO') {
        statusText.textContent = 'ON TIME'
      }
      // BACKLOOP
        else if (statusText.textContent === 'BOARDING') {
        statusText.textContent = 'EMBARQUE';
      } else if (statusText.textContent === 'PRE-BOARDING') {
        statusText.textContent = 'PRE-EMBARQUE'
      } else if (statusText.textContent === 'CLOSED') {
        statusText.textContent = 'CERRADO'
      } else if (statusText.textContent === 'LAST CALL') {
        statusText.textContent = 'ULTIMO AVISO'
      } else if (statusText.textContent === 'ASK AGENT') {
        statusText.textContent = 'CONSULTE CIA'
      } else if (statusText.textContent === 'DELAYED') {
        statusText.textContent = 'DEMORADO'
      } else if (statusText.textContent === 'ON TIME') {
        statusText.textContent = 'EN HORARIO'
      }
    }


  setTimeout(function() {
    updateText(); // Initial text update
    setInterval(function() {
      statusText.classList.toggle('hidden');
      updateText();
    }, 8000);
  }, 2000);
    
  
  
  
  // Update flight status function
  // function updateFlightStatus(status) {
  // document.getElementById('status').textContent = 'Flight Status: ' + status;
  // }
    
  // Receive flight status update from new-page.html
  // window.addEventListener('message', function(event) {
    // if (event.data && event.data.status) {
        // updateFlightStatus(event.data.status);
      // }
    // });