let rezultat = 0;

 function zbir() {
    
    let broj = document.getElementById('broj').value;
    
    rezultat = rezultat + Number(broj);

     document.getElementById('rezultat').value = rezultat;
     document.getElementById('broj').value = '';
        
    }