


function run() {

    let brojA = Number( document.getElementById('a').value );
    let brojB = Number( document.getElementById('b').value );

    if(brojA > brojB) {
        document.getElementById('text').innerHTML = "A je vece od B!";
    } else if (brojA < brojB) {
        document.getElementById('text').innerHTML = "A je manje od B!";
    } else {
        document.getElementById('text').innerHTML = "A je jednako B!";
    }
}