async function getIDR() {
    // const response = await fetch("http://api.nbp.pl/api/exchangerates/rates/a/idr/");
    const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=H1PIcdh78HWwX8ICe0CoZV79UtvAVTjrNUTa1zPz4rDXtM3jgh-5P4RRQremJ6rMElsFOnksJc1SRqduGqZ5FEFyIT64FytXm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMjCYLAkNAcob0yQBxDoGQKOb2iArNWrvEL02hEibu3huxpzbNQpdrD9NLNNrzex0xUn0ySjk8kP9ltVAGRdbUWldRdLmdTdd9z9Jw9Md8uu&lib=MEl_hMrlSOWnp64rCFujjEpGFppBk7uF5");
    const logTES = await response.json();
    // const logIDR = await response.json();
    // console.log(logTES[0].NIM);
    // console.log(logIDR.rates[0].mid);

    // document.getElementById("angka_tebakan").innerHTML = logIDR.rates[0].mid;
    document.getElementById("angka_tebakan").innerHTML = logTES[0];
  }
  
getIDR()