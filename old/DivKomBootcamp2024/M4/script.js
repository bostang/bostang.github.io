async function getIDR() {
    // const response = await fetch("http://api.nbp.pl/api/exchangerates/rates/a/idr/");
    const response = await fetch("https://script.google.com/macros/s/AKfycbyIWVbHtMKUKRiF7Yced0-jso-ygREg_8i5VcCEJu9fJehKqH92QHT_IsoWGPh666CO/exec");
    const logTES = await response.json();
    // const logIDR = await response.json();
    // console.log(logTES[0].NIM);
    // console.log(logIDR.rates[0].mid);

    // document.getElementById("angka_tebakan").innerHTML = logIDR.rates[0].mid;
    document.getElementById("angka_tebakan").innerHTML = logTES[0].NIM;
  }
  
// getIDR()
function fetchAndDisplayData(apiEndpoint){
// Fetch data from the Google Sheets API
fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    // Get the table body element
    const tbody = document.querySelector('#data-table tbody');

    // Loop through the data and create table rows
    data.forEach(rowData => {
      const row = document.createElement('tr');

      // Customize this loop based on your Google Sheets data structure
      for (const key in rowData) {
        if (rowData.hasOwnProperty(key)) {
          const cell = document.createElement('td');
          cell.textContent = rowData[key];
          row.appendChild(cell);
        }
      }

      // Append the row to the table body
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
}

