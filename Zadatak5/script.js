 

var arrayOfNumbers = [];

//adds the numbers to the array
function add () {
    var broj = document.getElementById('br1').value;

    arrayOfNumbers.push(parseInt(broj));
    //console.log(arrayOfNumbers);
    //console.log('Br elemenata niza: ' + arrayOfNumbers.length);

    document.getElementById('br1').value = '';
}

//sums the values from the array
function sum () {

    var sumNum = 0;

    for(var i = 0; i < arrayOfNumbers.length; i++) {

        //console.log('i = ' + i);
        //console.log(arrayOfNumbers[i]);
        sumNum += arrayOfNumbers[i];
    }

    return sumNum;
}

function sumPrint () {

    var sumNum = sum();
    document.getElementById('sum').value = sumNum;
}

//calculates the average value from the array
function avg () {

    var sumNum = sum();
    var avgNum = sumNum/arrayOfNumbers.length;

    return avgNum;
}

function avgPrint () {
    
    var avgNum = avg();
    document.getElementById('avg').value = avgNum;
}

// let rezultat = 0;


// let niz = [];


//  function zbir() {

//     let broj = document.getElementById('broj').value;

//     niz.push( parseInt(broj) );    

//     document.getElementById('pniz').innerHTML = niz;

//     document.getElementById('broj').value = '';
        
//     }

// function sum() {

//     for (var i = 0; i < niz.length; i++) {
//         sum = niz[i];
//         document.getElementById('suma').innerHTML = niz[i];
//     }
// }   