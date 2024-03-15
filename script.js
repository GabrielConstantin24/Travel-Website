//Obtinem input-ul si lista de produse
const filterInput = document.getElementById('filterInput');
const productList = document.getElementById('productList');

//Afisam evenimentul de tastare pentru input
filterInput.addEventListener("input", function(){
    //Obtinem valoarea introdusa si convertim in litere mici si mari
    const filterText = filterInput.value.toLowerCase();

    //Obtinem toate elementele listei
    const products = productList.getElementsByClassName('vacanta');
    //Iteram prin produse si aplicam filtrul
    for (const product of products){
         const productName = product.getAttribute('data-name').toLowerCase(); //getAttribute il folosim la data-name (cautare)
         //Verificam daca numele produsului contine valoarea introdusa
         if(productName.includes(filterText)){
             product.classList.remove("filtered");
         }else{
            //Inlaturam clasa filtered daca nu se potriveste
            product.classList.add("filtered");
         }
    }
})