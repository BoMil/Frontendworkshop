


function run() {

    let broj = Number( document.getElementById('broj').value );
    let rezultat = broj % 2;

    if(rezultat === 0) {
        document.getElementById('text').innerHTML = "Broj je paran";
    } else  {
        document.getElementById('text').innerHTML = "Broj neparan!";
    } 
}