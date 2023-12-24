const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `$200 <span> / year </span>`;
        proPrice.innerHTML = `$1000 <span> / year </span>`;
    }else{
        starterPrice.innerHTML = `$19 <span> / month </span>`;
        proPrice.innerHTML = `$99 <span> / month </span>`; 
    }
})