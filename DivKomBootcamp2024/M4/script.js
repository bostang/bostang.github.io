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
  
getIDR()