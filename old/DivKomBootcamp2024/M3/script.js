function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function inputNama() {
    var x = document.getElementById("inputNama").value;
    document.getElementById("demo1").innerHTML = "Halo, "+x+"!\nSelamat bermain.";
}

function mainTebakAngka()
{
    document.getElementById("text_angka_tebakan").innerHTML = "Angka tebakan saya adalah:";
    document.getElementById("angka_tebakan").innerHTML = getRandomInt(10);
}

