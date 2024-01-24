     // SCRIPT PARA CAMBIAR DISEñO DE B ON DEMAND
     const spans = document.querySelectorAll('.check-in-letter');
  
     // Loop through each span
     spans.forEach(span => {
       // Check if the span's text content is "B"
       if (span.textContent === 'B') {
         // Change the class of the span to "check-in-letter3"
         span.classList.remove('check-in-letter');
         span.classList.add('check-in-letter3');
       }
     });

   // SCRIPT PARA FILTRAR BUSQUEDA
   const airlineInput = document.getElementById('airlineInput');
   const flightInput = document.getElementById('flightInput');
   const hourInput = document.getElementById('hourInput');
   const destinationInput = document.getElementById('destinationInput');
   
   const tables = Array.from(document.querySelectorAll('table:not(:first-of-type)'));
   
   airlineInput.addEventListener('input', filterTable);
   flightInput.addEventListener('input', filterTable);
   hourInput.addEventListener('input', filterTable);
   destinationInput.addEventListener('input', filterTable);
   
   function filterTable() {
     const airlineValue = airlineInput.value.toLowerCase();
     const flightValue = flightInput.value.toLowerCase();
     const hourValue = hourInput.value.toLowerCase();
     const destinationValue = destinationInput.value.toLowerCase();
   
     tables.forEach(table => {
       const rows = Array.from(table.querySelectorAll('tbody tr:not(:first-child)'));
       rows.forEach(row => {
         const airlineCell = row.querySelector('td:nth-child(1) img');
         const flightCell = row.querySelector('td:nth-child(2)');
         const destinationCell = row.querySelector('td:nth-child(3)');
         const hourCell = row.querySelector('td:nth-child(4)');
   
         const showAirline = airlineCell.alt.toLowerCase().includes(airlineValue);
         const showFlight = flightCell.textContent.toLowerCase().includes(flightValue);
         const showDestination = destinationCell.textContent.toLowerCase().includes(destinationValue);
         const showHour = hourCell.textContent.toLowerCase().includes(hourValue);
   
         const showRow = showAirline && showFlight && showDestination && showHour;
   
         row.style.display = showRow ? '' : 'none';
       });
     });
   }



























   //  const airlineInput = document.getElementById('airlineInput');
  //  const flightInput = document.getElementById('flightInput');
  //  const hourInput = document.getElementById('hourInput');
  //  const destinationInput = document.getElementById('destinationInput');
  //  const rows = Array.from(document.querySelectorAll('table:not(:first-of-type) tbody tr'));
  //  const headerRow = document.querySelector('.infotr');

  //  airlineInput.addEventListener('input', filterTable);
  //  flightInput.addEventListener('input', filterTable);
  //  hourInput.addEventListener('input', filterTable);
  //  destinationInput.addEventListener('input', filterTable);
 

  //  function filterTable() {
  //    const airlineValue = airlineInput.value.toLowerCase();
  //    const flightValue = flightInput.value.toLowerCase();
  //    const hourValue = hourInput.value.toLowerCase();
  //    const destinationValue = destinationInput.value.toLowerCase();
       
     
  //    rows.forEach(row => {
  //      if (row !== headerRow) {
  //        const airlineCell = row.querySelector('td:nth-child(1) img');
  //        const flightCell = row.querySelector('td:nth-child(2)');
  //        const destinationCell = row.querySelector('td:nth-child(3)');
  //        const hourCell = row.querySelector('td:nth-child(4)');

  //        const showAirline = airlineCell.alt.toLowerCase().includes(airlineValue);
  //        const showFlight = flightCell.textContent.toLowerCase().includes(flightValue);
  //        const showDestination = destinationCell.textContent.toLowerCase().includes(destinationValue);
  //        const showHour = hourCell.textContent.toLowerCase().includes(hourValue);

  //        const showRow = showAirline && showFlight && showDestination && showHour;

  //        row.style.display = showRow ? '' : 'none';
  //      }
  //    });
  //  }