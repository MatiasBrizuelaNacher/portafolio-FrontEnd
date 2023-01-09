let ubicacionPrincipalHeader = window.pageYOffset;
let header= document.querySelector('#header');
document.write(ubicacionPrincipalHeader);
window.addEventListener('scroll', eventoScroll);

function eventoScroll(){
    let ubicacionActualHeader= window.pageYOffset;
    console.log(ubicacionActualHeader);
    if(ubicacionPrincipalHeader >= ubicacionActualHeader){
        header.style.top= '15em';
    }else{
        header.style.top='0em'
    }

    ubicacionPrincipalHeader=ubicacionActualHeader;
}

